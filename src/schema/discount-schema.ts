import { z } from "zod";

const discountSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên giảm giá!" }),
    discountType: z
        .string(),
    discount: z
        .string()
        .min(1, { error: "Vui lòng nhập giảm giá!" }),

    products: z
        .array(z.number())
        .min(2, { error: "Vui lòng chọn ít nhất 2 sản phẩm cho giảm giá!" }),
});

export default discountSchema;