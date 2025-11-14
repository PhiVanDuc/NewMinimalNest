import { z } from "zod";

const addressSchema = z.object({
    receiver: z
        .string()
        .min(1, { error: "Vui lòng nhập tên người nhận!" }),
    phoneNumber: z
        .string()
        .min(1, { error: "Vui lòng nhập số điện thoại!" }),
    address: z
        .string()
        .min(1, { error: "Vui lòng nhập địa chỉ!" })
});

export default addressSchema;