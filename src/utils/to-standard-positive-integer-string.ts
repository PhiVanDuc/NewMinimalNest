import numeral from "numeral";
import toPositiveIntegerString from "@/utils/to-positive-integer-string"

const toStandardPositiveIntegerString = (string: string) => {
    const positiveIntegerString = toPositiveIntegerString(string);

    if (!positiveIntegerString || positiveIntegerString.startsWith("0")) return "";
    return numeral(positiveIntegerString).format('0,0').replace(/,/g, '.');
}

export default toStandardPositiveIntegerString;