export default (data: Record<string, string | object>) => {
    const searchParams = new URLSearchParams();

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (typeof value === "string") searchParams.append(key, value);
        if (Array.isArray(value)) searchParams.append(key, value.join(","));
    });

    return searchParams.toString();
}