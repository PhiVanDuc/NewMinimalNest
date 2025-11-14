import { z } from "zod";

const signInSchema = z.object({
    email: z
        .string()
        .min(1, { error: "Vui lòng nhập Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
    password: z
        .string()
        .min(1, { error: "Vui lòng nhập mật khẩu!" })
});

export default signInSchema;