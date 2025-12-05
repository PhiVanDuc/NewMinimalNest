import { z } from "zod";

const verificationEmailSchema = z.object({
    email: z
        .string()
        .min(1, { error: "Vui lòng nhập Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
});

export default verificationEmailSchema;