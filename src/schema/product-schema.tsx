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
        .enum(["percent", "amount"]),
    discount: z
        .string(),
    price: z
        .string()
        .readonly(),
    categories: z
        .array(
            z.object({
                name: z.string(),
                slug: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất một danh mục cho sản phẩm!" }),
    colors: z
        .array(
            z.object({
                name: z.string(),
                slug: z.string(),
                colorCode: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất một màu sắc cho sản phẩm!" }),
    color: z
        .object({
            name: z.string(),
            slug: z.string(),
            colorCode: z.string()
        })
        .optional(),
    images: z
        .array(
            z.object({
                colorSlug: z.string(),
                type: z.enum(["main", "sub", "normal"]),
                image: z.union([z.instanceof(File), z.string()])
            })
        )
})
    .refine(
        data => {
            let result = true;
            const images = data.images;
            const colors = data.colors;

            for (const color of colors) {
                const groupImages = images.filter(img => img.colorSlug === color.slug);

                const mainCount = groupImages.filter(i => i.type === "main").length;
                const subCount = groupImages.filter(i => i.type === "sub").length;

                if (mainCount < 1 || subCount < 2) {
                    result = false;
                    break;
                }
            }

            return result;
        },
        {
            message: "Vui lòng cung cấp mỗi màu một ảnh chính và hai ảnh phụ cho hình ảnh!",
            path: ["images"]
        }
    )

export default productSchema;