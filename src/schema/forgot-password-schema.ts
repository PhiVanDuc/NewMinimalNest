import { z } from "zod";

const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, { error: "Vui lòng nhập Email!" })
        .email({ error: "Vui lòng nhập đúng định dạng Email!" }),
    otp: z
        .string()
        .length(1, { error: "Vui lòng nhập OTP! " })
        .regex(/^\d+$/, { error: "Vui lòng nhập số hoặc chữ cái cho OTP!" }),
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

export default forgotPasswordSchema;