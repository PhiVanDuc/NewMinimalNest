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
            cache: "no-cache" as RequestCache,
            ...options,
            ...(parseBody ? { body: parseBody } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_ROOT_API || ROOT_API}${path}`, finalOptions);
        const result = await response.json();

        return { status: response.status, ...result };
    }
    catch (err) {
        throw new Error("Lỗi không xác định!");
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