import ProductImage from "@/app/(user)/products/[productId]/components/ProductImage";
import ProductInfo from "@/app/(user)/products/[productId]/components/ProductInfo";
import ProductRelated from "@/app/(user)/products/[productId]/components/ProductRelated";
import ProductReview from "@/app/(user)/products/[productId]/components/ProductReview";

import { cn } from "@/lib/utils";

export default function Page() {
    // Fetch data nếu cần

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
            <ProductReview />
        </div>
    )
}
