import toPositiveIntegerString from "@/utils/to-positive-integer-string";
import toStandardPositiveIntegerString from "@/utils/to-standard-positive-integer-string";

import DISCOUNT_TYPES from "@/consts/discount-types";

export default (costPriceStr: string, interestPercentStr: string, discountStr: string, discountType: string) => {
    const costPrice = Number(toPositiveIntegerString(costPriceStr) || 0);
    const interestPercent = Number(toPositiveIntegerString(interestPercentStr) || 0);
    const discount = Number(toPositiveIntegerString(discountStr) || 0);
    if (!costPrice) return "";
    
    const priceWithInterest = costPrice * (1 + interestPercent / 100);
    let finalPrice;

    if (!discount) finalPrice = priceWithInterest;
    else {
        if (discountType === DISCOUNT_TYPES.PERCENT) finalPrice = priceWithInterest - (priceWithInterest * discount) / 100;
        else finalPrice = priceWithInterest - discount;
    }

    return toStandardPositiveIntegerString(Math.ceil(finalPrice).toString());
}