import { z } from "zod";

const productSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên sản phẩm!" }),
    desc: z
        .string()
        .min(1, { error: "Vui lòng nhập mô tả!" }),
    costPrice: z
        .string()
        .min(1, { error: "Vui lòng nhập giá gốc!" }),
    interestPercent: z
        .string()
        .min(1, { error: "Vui lòng nhập lãi xuất %!" }),
    discountType: z
        .enum(["percent", "amount"]),
    discount: z
        .string(),
    price: z
        .string()
        .readonly()
});

export default productSchema;