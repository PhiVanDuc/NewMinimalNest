import { z } from "zod";

const returnProductSchema = z.object({
    id: z
        .string(),
    evidenceImages: z
        .array(
            z.union([
                z.instanceof(File),
                z.string()
            ])
        ),
    returnQuantity: z
        .string(),
    returnReason: z
        .string()
        .min(1, { error: "Vui lòng nhập lý do!" })
});

const returnRequestSchema = z.object({
    returnProducts: z
        .array(returnProductSchema)
        .min(1, { error: "Vui lòng chọn ít nhất một sản phẩm hoàn trả!" })
});

export default returnRequestSchema;