import { signOut } from "@/services/auth";
import { getAccessToken, getRefreshToken } from "@/services/cookies";

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

const NEXT_PUBLIC_ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

let refreshPromise: Promise<Omit<ReturnType<{ accessToken: string }>, "status">> | undefined;

const refreshTokens = async (): Promise<Omit<ReturnType<{ accessToken: string }>, "status"> | undefined> => {
    if (!refreshPromise) {
        refreshPromise = (async () => {
            try {
                const refreshToken = await getRefreshToken();
                const response = await fetch(
                    "/api/auth/tokens/refresh",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ refreshToken }),
                        cache: "no-cache"
                    }
                );

                const result = await response.json();
                if (response.status === 401 || !result.success) await signOut();

                return result;
            }
            catch (err) {
                const error = err as Error;

                console.log("Private Fetch - 500 /api/auth/refresh -- Lỗi không xác định!");
                console.log(error);

                return {
                    success: false,
                    message: "Lỗi không xác định!"
                }
            }
            finally { refreshPromise = undefined; }
        })();
    }

    return refreshPromise;
}

const handleFetch = async <RequestBodyType = unknown, ResponseDataType = unknown>(method: MethodType, path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
    try {
        const isBody = ["POST", "PUT", "PATCH"].includes(method);
        const isBodyFormData = body instanceof FormData;
        const accessToken = await getAccessToken();

        const headers = {
            "Authorization": `Bearer ${accessToken}`,
            ...(isBody && body && !isBodyFormData ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {})
        };

        const parseBody = (isBody && body) ?
            isBodyFormData ? body : JSON.stringify(body) :
            undefined;

        let finalOptions = {
            method,
            headers,
            cache: "no-cache" as RequestCache,
            ...options,
            ...(parseBody ? { body: parseBody } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_ROOT_API}${path}`, finalOptions);
        const result = await response.json();

        if (response.status === 401) {
            const isInvalid = result.data?.isInvalid;
            const isExpired = result.data?.isExpired;

            if (isInvalid) await signOut();
            else if (isExpired) {
                const refreshed = await refreshTokens();
                if (!refreshed?.success) await signOut();

                finalOptions = {
                    ...finalOptions,
                    headers: {
                        ...headers,
                        "Authorization": `Bearer ${refreshed?.data?.accessToken}`
                    }
                }

                const retryResponse = await fetch(`${NEXT_PUBLIC_ROOT_API}${path}`, finalOptions);
                const retryResult = await retryResponse.json();

                if (retryResponse.status === 401) await signOut();
                return { status: retryResponse.status, ...retryResult };
            }
        }

        return { status: response.status, ...result };
    }
    catch (err) {
        const error = err as Error;

        console.log(`Private Fetch -- 500 ${path} -- Lỗi không xác định!`);
        console.log(error);

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