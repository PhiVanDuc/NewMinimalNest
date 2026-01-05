export default (string?: string) => {
    if (!string) return "";

    const MAX_SAFE_STRING = "9007199254740991";
    const positiveIntegerString = string.replace(/\D/g, '');

    if (
        !positiveIntegerString ||
        positiveIntegerString.startsWith("0") ||
        positiveIntegerString.length > MAX_SAFE_STRING.length ||
        (
            positiveIntegerString.length === MAX_SAFE_STRING.length &&
            positiveIntegerString > MAX_SAFE_STRING
        )
    ) return "";

    return positiveIntegerString;
};