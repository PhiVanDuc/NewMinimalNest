type MethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface OptionsType {
    headers: Record<string, string>,
    mode?: 'cors' | 'no-cors' | 'same-origin';
    credentials?: 'omit' | 'same-origin' | 'include';
    cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
    redirect?: 'follow' | 'error' | 'manual';
    referrer?: string;
    referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal | null;

}

interface ResultType<ResponseDataType> {
    success: boolean,
    message: string,
    data?: ResponseDataType
}

const NEXT_PUBLIC_ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;

const handleFetch = async <RequestBodyType = unknown, ResponseDataType = unknown>(method: MethodType, path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
    try {
        const isBody = ["POST", "PUT", "PATCH"].includes(method);

        const headers = {
            ...(isBody ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {})
        };

        if (!headers["Content-Type"]) delete headers["Content-Type"];
        const parseBody = (isBody && body) ? JSON.stringify(body) : undefined;

        const finalOptions = {
            ...options,
            method,
            headers,
            ...(parseBody ? { body: parseBody as BodyInit } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_ROOT_API}${path}`, finalOptions);
        return await response.json();
    }
    catch (error) { throw error; }
}

const publicFetch = {
    get: async <ResponseDataType = unknown>(path: string, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
        return handleFetch<unknown, ResponseDataType>("GET", path, undefined, options);
    },

    post: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("POST", path, body, options);
    },

    put: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("PUT", path, body, options);
    },

    patch: async <RequestBodyType = unknown, ResponseDataType = unknown>(path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
        return handleFetch<RequestBodyType, ResponseDataType>("PATCH", path, body, options);
    },

    delete: async <ResponseDataType = unknown>(path: string, options?: OptionsType): Promise<ResultType<ResponseDataType>> => {
        return handleFetch<unknown, ResponseDataType>("DELETE", path, undefined, options);
    },
}

export default publicFetch;