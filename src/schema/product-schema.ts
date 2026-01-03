import { z } from "zod";

const productSchema = z.object({
    name: z
        .string()
        .min(1, { error: "Vui lòng nhập tên sản phẩm!" }),
    desc: z
        .string()
        .min(1, { error: "Vui lòng nhập mô tả!" }),
    costPrice: z
        .string()
        .min(1, { error: "Vui lòng nhập giá gốc!" }),
    interestPercent: z
        .string()
        .min(1, { error: "Vui lòng nhập lãi xuất %!" }),
    discountType: z
        .string(),
    discount: z
        .string(),
    price: z
        .string()
        .readonly(),
    categories: z
        .array(
            z.object({
                id: z.string(),
                name: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất 1 danh mục cho sản phẩm!" }),
    colors: z
        .array(
            z.object({
                id: z.string(),
                name: z.string(),
                colorCode: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất 1 màu sắc cho sản phẩm!" }),
    color: z
        .object({
            id: z.string(),
            name: z.string(),
            colorCode: z.string()
        })
        .optional(),
    images: z
        .array(
            z.object({
                colorId: z.string(),
                role: z.enum(["main", "sub", "normal"]),
                image: z.union([z.instanceof(File), z.string()]),
                preview: z.optional(z.string())
            })
        )
})
    .superRefine((data, ctx) => {
        const { colors, images } = data;

        for (const color of colors) {
            const groupImages = images.filter(image => image.colorId === color.id);
            const mainCount = groupImages.filter(image => image.role === "main").length;
            const subCount = groupImages.filter(image => image.role === "sub").length;

            if (mainCount < 1 || subCount < 2) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Vui lòng cung cấp cho màu "${color.name}" 1 ảnh chính và 2 ảnh phụ!`,
                    path: ["images"]
                });

                break;
            }

            if (groupImages.length > 10) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Vui lòng chỉ cung cấp cho màu "${color.name}" tối đa 10 ảnh!`,
                    path: ["images"]
                });

                break;
            }
        }
    })

export default productSchema;