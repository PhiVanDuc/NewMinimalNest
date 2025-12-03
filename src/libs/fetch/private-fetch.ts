import { refresh } from "@/services/auth/client";
import { signOut } from "@/services/auth/server";
import { getAccessToken } from "@/services/cookies";

type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface OptionsType {
    headers: Record<string, string>,
    mode?: RequestMode,
    credentials?: RequestCredentials,
    cache?: RequestCache;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal | null;
}

interface ReturnType<ResponseDataType> {
    status: number,
    success: boolean,
    message: string,
    data?: ResponseDataType
}

const ROOT_API = process.env.ROOT_API;
const NEXT_PUBLIC_ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

let refreshPromise: Promise<Omit<ReturnType<{ accessToken: string }>, "status">> | null = null;

const singleRefresh = async (): Promise<Omit<ReturnType<{ accessToken: string }>, "status"> | null> => {
    if (!refreshPromise) {
        refreshPromise = refresh()
            .finally(() => refreshPromise = null);
    }
    return refreshPromise;
}

const handleFetch = async <RequestBodyType = unknown, ResponseDataType = unknown>(method: MethodType, path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
    try {
        const isBody = ["POST", "PUT", "PATCH"].includes(method);
        const accessToken = await getAccessToken();

        const headers = {
            ...(isBody ? { "Content-Type": "application/json" } : {}),
            "Authorization": `Bearer ${accessToken}`,
            ...(options?.headers ?? {})
        };

        if (!headers["Content-Type"]) delete headers["Content-Type"];
        const parseBody = (isBody && body) ?
            body instanceof FormData || typeof body === "string" || body instanceof Blob || body instanceof ArrayBuffer || ArrayBuffer.isView(body) || body instanceof URLSearchParams ?
                body :
                JSON.stringify(body) :
            undefined;

        let finalOptions = {
            cache: "no-cache" as RequestCache,
            ...options,
            method,
            headers,
            ...(parseBody ? { body: parseBody } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_ROOT_API || ROOT_API}${path}`, finalOptions);
        const result = await response.json();

        if (response.status === 401) {
            const isInvalid = result.data?.isInvalid;
            const isExpired = result.data?.isExpired;

            if (isInvalid) await signOut();
            else if (isExpired) {
                const refreshed = await singleRefresh();
                if (!refreshed?.success) await signOut();

                finalOptions = {
                    ...finalOptions,
                    headers: {
                        ...headers,
                        "Authorization": `Bearer ${refreshed?.data?.accessToken}`
                    }
                }

                const retryResponse = await fetch(`${NEXT_PUBLIC_ROOT_API || ROOT_API}${path}`, finalOptions);
                const retryResult = await retryResponse.json();

                return { status: retryResponse.status, ...retryResult };
            }
        }

        return { status: response.status, ...result };
    }
    catch (err) {
        const error = err as Error;

        console.log(`Private Fetch -- 500 ${path} -- Lỗi không xác định!`);
        console.log(error.message);

        throw new Error("Lỗi không xác định!");
    }
}

const privateFetch = {
    get: async <ResponseDataType = unknown>(path: string, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
        return handleFetch<unknown, ResponseDataType>("GET", path, undefined, options);
    },

    post: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("POST", path, body, options);
    },

    put: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("PUT", path, body, options);
    },

    patch: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("PATCH", path, body, options);
    },

    delete: async <ResponseDataType = unknown>(path: string, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
        return handleFetch<unknown, ResponseDataType>("DELETE", path, undefined, options);
    },
}

export default privateFetch;