export default (data: Record<string, string | object>) => {
    const params = new URLSearchParams;

    Object.keys(data).forEach(key => {
        const value = data[key];

        if (typeof value === "string") params.append(key, value);
        if (Array.isArray(value)) params.append(key, value.join(","));
    });

    return params.toString();
}