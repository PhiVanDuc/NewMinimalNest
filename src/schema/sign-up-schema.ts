import { z } from "zod";

const signUpSchema = z.object({
    username: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự cho tên người dùng!" }),
    email: z
        .string()
        .min(1, { error: "Vui lòng nhập Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
    password: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự cho mật khẩu!" }),
    confirmPassword: z
        .string()
        .min(1, { error: "Vui lòng nhập xác nhận mật khẩu!" })
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            error: "Mật khẩu xác nhận không khớp!",
            path: ["confirmPassword"]
        }
    )

export default signUpSchema;