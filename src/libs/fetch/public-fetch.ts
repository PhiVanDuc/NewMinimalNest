type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type Body<InputData> = BodyInit | InputData;

interface Options extends Omit<RequestInit, "method" | "body"> {
    headers?: Record<string, string>;
}

interface Output<OutputData> {
    status: number,
    success: boolean,
    message: string,
    data?: OutputData
}

const BE_API = process.env.BE_API;
const NEXT_PUBLIC_BE_API = process.env.NEXT_PUBLIC_BE_API;

const handleFetch = async <InputData = unknown, OutputData = unknown>(method: Method, path: string, body?: Body<InputData>, options?: Options): Promise<Output<OutputData>> => {
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

export default publicFetch;