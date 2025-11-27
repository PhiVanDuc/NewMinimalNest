import { z } from "zod";

const productStatusSchema = z.object({
    name: z
        .string(),
    products: z
        .array(z.number())
        .min(2, { error: "Vui lòng chọn ít nhất 2 sản phẩm cho nhóm!" }),
});

export default productStatusSchema;