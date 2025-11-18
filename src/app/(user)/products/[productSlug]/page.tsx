import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import ProductInfo from "@/app/(user)/products/[productSlug]/components/ProductInfo";
import ProductImage from "@/app/(user)/products/[productSlug]/components/ProductImage";
import ProductReviews from "@/app/(user)/products/[productSlug]/components/ProductReviews";
import ProductRelateds from "@/app/(user)/products/[productSlug]/components/ProductRelateds";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="space-y-[60px]">
            <div className="space-y-[40px]">
                <BreadcrumbCustom />

                <div
                    className={cn(
                        "flex flex-col items-start gap-[60px]",
                        "xl:flex-row"
                    )}
                >
                    <ProductImage />
                    <ProductInfo />
                </div>
            </div>

            <ProductRelateds />
            <ProductReviews />
        </div>
    )
}
