import { z } from "zod";

const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự cho mật khẩu!" }),
    confirmPassword: z
        .string()
        .min(1, { error: "Vui lòng nhập xác nhận mật khẩu!" }),
    token: z
        .string()
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            error: "Mật khẩu xác nhận không khớp!",
            path: ["confirmPassword"]
        }
    )

export default resetPasswordSchema;