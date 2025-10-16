import ProductImage from "@/app/(user)/products/[productId]/components/ProductImage";
import ProductInfo from "@/app/(user)/products/[productId]/components/ProductInfo";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-[60px]",
                "xl:flex-row"
            )}
        >
            <ProductImage />
            <ProductInfo />
        </div>
    )
}
