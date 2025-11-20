import { z } from "zod";

const productGroupSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên nhóm sản phẩm!" }),
    products: z
        .array(z.number())
        .min(2, { error: "Vui lòng chọn ít nhất 2 sản phẩm cho nhóm!" }),
});

export default productGroupSchema;