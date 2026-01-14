"use client"

import { signOut } from "@/services/auth";
import { getAccessToken, getRefreshToken } from "@/services/cookies";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Body<InputData> = BodyInit | InputData;

interface Options extends Omit<RequestInit, "method" | "body"> {
    headers?: Record<string, string>;
}

interface Output<OutputData> {
    statusCode: number,
    success: boolean,
    message: string,
    data?: OutputData
}

const NEXT_PUBLIC_FE = process.env.NEXT_PUBLIC_FE;
const NEXT_PUBLIC_BE_API = process.env.NEXT_PUBLIC_BE_API;

let refreshPromise: Promise<Omit<Output<{ accessToken: string }>, "statusCode">> | undefined;

const refreshTokens = async (): Promise<Omit<Output<{ accessToken: string }>, "statusCode"> | undefined> => {
    if (!refreshPromise) {
        refreshPromise = (async () => {
            const path = "/api/auth/tokens/refresh";

            try {
                const refreshToken = await getRefreshToken();
                const response = await fetch(
                    path,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refreshToken: refreshToken?.value })
                    }
                );

                return await response.json();
            }
            catch (err) {
                const error = err as Error;

                console.log(`Private Fetch - ${NEXT_PUBLIC_FE}${path}`);
                console.log(error);

                return {
                    success: false,
                    message: error.message || "Lỗi không xác định!"
                }
            }
            finally { refreshPromise = undefined; }
        })();
    }

    return refreshPromise;
}

const handleFetch = async <InputData = unknown, OutputData = unknown>(method: Method, path: string, body?: Body<InputData>, options?: Options): Promise<Output<OutputData>> => {
    try {
        const isBody = ["POST", "PUT", "PATCH"].includes(method);
        const isBodyFormData = body instanceof FormData;
        const accessToken = await getAccessToken();

        const headers = {
            "Authorization": `Bearer ${accessToken?.value}`,
            ...(isBody && body && !isBodyFormData ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {})
        };

        const parseBody = (isBody && body) ?
            isBodyFormData ? body : JSON.stringify(body) :
            undefined;

        let finalOptions = {
            method,
            headers,
            ...options,
            ...(parseBody ? { body: parseBody } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_BE_API}${path}`, finalOptions);
        const result = await response.json();

        if (response.status === 401) {
            const isInvalid = result.data?.isInvalid;
            const isExpired = result.data?.isExpired;

            if (isInvalid) await signOut();
            if (isExpired) {
                const refresh = await refreshTokens();
                if (!refresh?.success) await signOut();

                const retryHeaders = { ...headers, "Authorization": `Bearer ${refresh?.data?.accessToken}` }
                const retryResponse = await fetch(`${NEXT_PUBLIC_BE_API}${path}`, { ...finalOptions, headers: retryHeaders });
                const retryResult = await retryResponse.json();

                if (retryResponse.status === 401) await signOut();
                return { statusCode: retryResponse.status, ...retryResult };
            }
        }

        return { statusCode: response.status, ...result };
    }
    catch (err) {
        const error = err as Error;
        error.message = error.message || "Lỗi không xác định!";

        console.log(`Private Fetch - ${NEXT_PUBLIC_BE_API}${path}`);
        console.log(error);
        
        throw error;
    }
}

const privateFetch = {
    get: async <OutputData = unknown>(path: string, options?: Options): Promise<Output<OutputData>> => {
        return handleFetch<unknown, OutputData>("GET", path, undefined, options);
    },

    post: async <InputData = unknown, OutputData = unknown>(path: string, body?: BodyInit | InputData, options?: Options): Promise<Output<OutputData>> => {
        return handleFetch<InputData, OutputData>("POST", path, body, options);
    },

    put: async <InputData = unknown, OutputData = unknown>(path: string, body?: BodyInit | InputData, options?: Options): Promise<Output<OutputData>> => {
        return handleFetch<InputData, OutputData>("PUT", path, body, options);
    },

    patch: async <InputData = unknown, OutputData = unknown>(path: string, body?: BodyInit | InputData, options?: Options): Promise<Output<OutputData>> => {
        return handleFetch<InputData, OutputData>("PATCH", path, body, options);
    },

    delete: async <OutputData = unknown>(path: string, options?: Options): Promise<Output<OutputData>> => {
        return handleFetch<unknown, OutputData>("DELETE", path, undefined, options);
    },
}

export default privateFetch;