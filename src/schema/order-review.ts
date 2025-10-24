import { z } from "zod";

const orderReviewSchema = z.object({
    id: z
        .string(),
    rate: z
        .number()
        .min(1, { error: "Vui lòng không để trống đánh giá sao!" }),
    comment: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường nhận xét!" })
});

export default orderReviewSchema;