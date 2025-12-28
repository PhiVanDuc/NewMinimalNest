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

const BE_API = process.env.BE_API;
const NEXT_PUBLIC_BE_API = process.env.NEXT_PUBLIC_BE_API;

const handleFetch = async <RequestBodyType = unknown, ResponseDataType = unknown>(method: MethodType, path: string, body?: BodyInit | RequestBodyType, options?: OptionsType): Promise<ReturnType<ResponseDataType>> => {
    try {
        const isBody = ["POST", "PUT", "PATCH"].includes(method);
        const isBodyFormData = body instanceof FormData;

        const headers = {
            ...(isBody && body && !isBodyFormData ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {})
        };

        const parseBody = (isBody && body) ?
            (isBodyFormData ? body : JSON.stringify(body)) :
            undefined;

        const finalOptions = {
            method,
            headers,
            ...options,
            ...(parseBody ? { body: parseBody } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_BE_API || BE_API}${path}`, finalOptions);
        const result = await response.json();

        return { status: response.status, ...result };
    }
    catch (err) {
        const error = err as Error;
        error.message = error.message || "Lỗi không xác định!";

        console.log(`Public Fetch - ${NEXT_PUBLIC_BE_API || BE_API}${path}`);
        console.log(error);

        throw error;
    }
}

const publicFetch = {
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

export default publicFetch;