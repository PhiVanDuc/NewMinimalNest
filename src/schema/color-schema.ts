import { z } from "zod";

const colorSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường tên màu sắc!" }),
    hex: z
        .string()
        .regex(/^#([0-9A-Fa-f]{6})$/, { message: "Vui lòng nhập đúng định dạng mã hex!" })

})

export default colorSchema;