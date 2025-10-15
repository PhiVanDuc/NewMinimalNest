const positiveIntegerValidator = (value: string) => {
    const number = Number(value);
    return Number.isInteger(number) && number > 0;
}

export default positiveIntegerValidator;