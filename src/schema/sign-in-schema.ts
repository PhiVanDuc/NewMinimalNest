import { z } from "zod";

const signInSchema = z.object({
    email: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
    password: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự!" })
});

export default signInSchema;