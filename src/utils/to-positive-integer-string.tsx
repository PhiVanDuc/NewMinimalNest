const toPositiveIntegerString = (string: string) => {
    const positiveIntegerString = string.replace(/\D/g, '');
    if (!positiveIntegerString || positiveIntegerString.startsWith("0")) return "";

    return positiveIntegerString;
}

export default toPositiveIntegerString;