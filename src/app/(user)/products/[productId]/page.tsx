import ProductImage from "@/app/(user)/products/[productId]/components/ProductImage";
import ProductInfo from "@/app/(user)/products/[productId]/components/ProductInfo";
import ProductRelated from "@/app/(user)/products/[productId]/components/ProductRelated";
import ProductComment from "@/app/(user)/products/[productId]/components/ProductComment";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="space-y-[60px]">
            <div
                className={cn(
                    "flex flex-col items-start gap-[60px]",
                    "xl:flex-row"
                )}
            >
                <ProductImage />
                <ProductInfo />
            </div>

            <ProductRelated />
            <ProductComment />
        </div>
    )
}
