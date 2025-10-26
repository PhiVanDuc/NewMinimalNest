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
        .min(1, "Vui lòng không để trống trường lý do!")
});

const returnRequestSchema = z.object({
    returnProducts: z
        .array(returnProductSchema)
        .min(1, "Phải chọn ít nhất một sản phẩm hoàn trả!")
});

export default returnRequestSchema;