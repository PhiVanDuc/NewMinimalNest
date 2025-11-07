import { z } from "zod";

const categorySchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường tên danh mục!" })
})

export default categorySchema;