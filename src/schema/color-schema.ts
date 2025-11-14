import { z } from "zod";

const colorSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên màu sắc!" }),
    colorCode: z
        .string()
        .min(1, { error: "Vui lòng nhập hoặc chọn mã màu sắc!" })

})

export default colorSchema;