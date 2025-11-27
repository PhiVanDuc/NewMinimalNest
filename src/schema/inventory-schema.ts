import { z } from "zod";

const inventorySchema = z.object({
    name: z
        .string(),
    totalQuantity: z
        .string()
        .min(1, "Vui lòng nhập tổng số lượng tồn kho cho sản phẩm!")
});

export default inventorySchema;