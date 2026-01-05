export default (data: Record<string, string | object | undefined | null>) => {
    const searchParams = new URLSearchParams();

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (typeof value === "string") searchParams.append(key, value);
        if (Array.isArray(value)) searchParams.append(key, value.join(","));
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : "";
}