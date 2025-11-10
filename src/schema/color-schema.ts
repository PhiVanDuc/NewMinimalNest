import { z } from "zod";

const colorSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường tên màu sắc!" }),
    colorCode: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường mã màu sắc!" })

})

export default colorSchema;