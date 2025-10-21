import { z } from "zod";

const signUpSchema = z.object({
    username: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự!" }),
    email: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
    password: z
        .string()
        .min(6, { error: "Vui lòng nhập ít nhất 6 ký tự!" }),
    confirmPassword: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường xác nhận mật khẩu!" })
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Mật khẩu xác nhận không khớp!",
            path: ["confirmPassword"]
        }
    )

export default signUpSchema;