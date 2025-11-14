const isPositiveIntegerString = (string: string) => {
    return /^[1-9]\d*$/.test(string.replace(/\./g, ""));
}

export default isPositiveIntegerString;