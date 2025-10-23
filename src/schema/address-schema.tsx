import { z } from "zod";

const addressSchema = z.object({
    receiver: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường tên người nhận!" }),
    phoneNumber: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường số điện thoại!" }),
    address: z
        .string()
        .min(1, { error: "Vui lòng không để trống trường địa chỉ!" })
});

export default addressSchema;