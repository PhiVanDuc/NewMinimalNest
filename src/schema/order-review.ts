import { z } from "zod";

const orderReviewSchema = z.object({
    id: z
        .string(),
    rate: z
        .number()
        .min(1, { error: "Vui lòng đánh giá sao!" }),
    comment: z
        .string()
        .min(1, { error: "Vui lòng nhập nhận xét!" })
});

export default orderReviewSchema;