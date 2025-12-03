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

        const headers = {
            ...(isBody ? { "Content-Type": "application/json" } : {}),
            ...(options?.headers ?? {})
        };

        if (!headers["Content-Type"]) delete headers["Content-Type"];
        const parseBody = (isBody && body) ?
            body instanceof FormData || typeof body === "string" || body instanceof Blob || body instanceof ArrayBuffer || ArrayBuffer.isView(body) || body instanceof URLSearchParams ?
                body :
                JSON.stringify(body) :
            undefined;

        const finalOptions = {
            cache: "no-cache" as RequestCache,
            ...options,
            method,
            headers,
            ...(parseBody ? { body: parseBody as BodyInit } : {})
        }

        const response = await fetch(`${NEXT_PUBLIC_ROOT_API || ROOT_API}${path}`, finalOptions);
        const result = await response.json();

        return { status: response.status, ...result };
    }
    catch (err) {
        const error = err as Error;

        console.log(`Public Fetch -- 500 ${path} -- Lỗi không xác định!`);
        console.log(error.message);

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