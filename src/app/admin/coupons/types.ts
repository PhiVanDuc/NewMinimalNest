export interface CouponDataType {
    name: string
}

export interface CouponFormDataType {
    name: string,
    code: string,
    desc: string,
    discountType: string,
    discount: string,
    startDate: Date,
    endDate: Date,
    quantity: string,
    minTotal: string,
    rank: string
}