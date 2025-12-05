import { z } from "zod";

const resendEmailSchema = z.object({
    email: z
        .string()
        .min(1, { error: "Vui lòng nhập Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
});

export default resendEmailSchema;