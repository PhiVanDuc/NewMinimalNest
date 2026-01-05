import numeral from "numeral";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

export default (string?: string) => {
    if (!string) return "";
    
    const positiveIntegerString = toPositiveIntegerString(string);
    if (!positiveIntegerString) return "";

    return numeral(positiveIntegerString).format('0,0').replace(/,/g, '.');
};