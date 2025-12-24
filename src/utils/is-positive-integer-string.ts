export default (string: string) => {
    return /^[1-9]\d*$/.test(string.replace(/\./g, ""));
};