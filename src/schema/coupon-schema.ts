import { z } from "zod";

const couponSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên phiếu giảm giá!" }),
    code: z
        .string()
        .min(1, { error: "Vui lòng nhập mã phiếu giảm giá!" }),
    desc: z
        .string()
        .min(1, { error: "Vui lòng nhập mô tả!" }),
    discountType: z
        .string(),
    discount: z
        .string()
        .min(1, "Vui lòng nhập giảm giá!"),
    startDate: z
        .date(),
    endDate: z
        .date(),
    quantity: z
        .string()
        .min(1, { error: "Vui lòng nhập số lượng phiếu giảm giá!" }),
    minTotal: z
        .string(),
    rank: z
        .string()
})

export default couponSchema;