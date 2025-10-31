import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import ProductInfo from "@/app/(user)/products/[slugProduct]/components/ProductInfo";
import ProductImage from "@/app/(user)/products/[slugProduct]/components/ProductImage";
import ProductReviewList from "@/app/(user)/products/[slugProduct]/components/ProductReviewList";
import ProductRelatedList from "@/app/(user)/products/[slugProduct]/components/ProductRelatedList";

import { cn } from "@/lib/utils";

export default function Page() {
    // Fetch data nếu cần

    return (
        <div className="space-y-[60px]">
            <div className="space-y-[40px]">
                <CustomBreadcrumb />

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

            <ProductRelatedList />
            <ProductReviewList />
        </div>
    )
}
