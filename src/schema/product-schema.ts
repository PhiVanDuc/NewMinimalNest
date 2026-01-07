import { z } from "zod";

import IMAGE_ROLES from "@/consts/image-roles";
import DISCOUNT_TYPES from "@/consts/discount-types";

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
        .enum(Object.values(DISCOUNT_TYPES)),
    discount: z
        .string(),
    price: z
        .string()
        .readonly(),
    categories: z
        .array(
            z.object({
                id: z.string(),
                name: z.string(),
                slug: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất 1 danh mục cho sản phẩm!" }),
    colors: z
        .array(
            z.object({
                id: z.string(),
                name: z.string(),
                slug: z.string(),
                colorCode: z.string()
            })
        )
        .min(1, { error: "Vui lòng chọn ít nhất 1 màu sắc cho sản phẩm!" }),
    color: z
        .optional(
            z.object({
                id: z.string(),
                name: z.string(),
                slug: z.string(),
                colorCode: z.string()
            })
        ),
    images: z
        .array(
            z.object({
                id: z.optional(z.string()),
                colorId: z.string(),
                preview: z.optional(z.string()),
                url: z.optional(z.string()),
                image: z.optional(z.instanceof(File)),
                role: z.enum(Object.values(IMAGE_ROLES)),
            })
        )
})
    .superRefine((data, ctx) => {
        const { colors, images } = data;

        for (const color of colors) {
            const groupImages = images.filter(image => image.colorId === color.id);
            const mainCount = groupImages.filter(image => image.role === IMAGE_ROLES.MAIN_IMAGE).length;
            const subCount = groupImages.filter(image => image.role === IMAGE_ROLES.SUB_IMAGE).length;

            if (mainCount < 1 || subCount < 2) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: `Vui lòng chọn  1 ảnh chính và 2 ảnh phụ cho màu "${color.name}" !`,
                    path: ["images"]
                });

                break;
            }
        }
    })

export default productSchema;