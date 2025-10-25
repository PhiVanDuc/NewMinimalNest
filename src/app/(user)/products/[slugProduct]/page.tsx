import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import ProductInfo from "@/app/(user)/products/[slugProduct]/components/ProductInfo";
import ProductImage from "@/app/(user)/products/[slugProduct]/components/ProductImage";
import ProductReview from "@/app/(user)/products/[slugProduct]/components/ProductReview";
import ProductRelated from "@/app/(user)/products/[slugProduct]/components/ProductRelated";

import { cn } from "@/lib/utils";

export default function Page() {
    // Fetch data nếu cần

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

            <ProductRelated />
            <ProductReview />
        </div>
    )
}
