import Link from "next/link";
import Product from "@/components/Product";

import { Button } from "@/components/ui/button";
import { TbLayoutGridFilled } from "react-icons/tb";

import { cn } from "@/lib/utils";

export default function FeaturedProduct() {
    return (
        <div className="space-y-[40px]">
            <div
                className={cn(
                    "flex flex-col items-center justify-between gap-[40px]",
                    "lg:flex-row"
                )}
            >
                <header className="space-y-[10px]">
                    <h2 className="header-basic">
                        Sản Phẩm Nổi Bật
                    </h2>

                    <p className="desc-basic max-w-[800px]">
                        Khám phá những sản phẩm được đánh giá tốt nhất của chúng tôi mà khách hàng yêu thích. Từ thiết kế tinh tế đến chất lượng vượt trội, mang lại trải nghiệm hoàn hảo cho không gian sống của bạn.
                    </p>
                </header>

                <Button
                    className="rounded-full cursor-pointer"
                    asChild
                >
                    <Link href="/products/search?statuses=noi-bat">
                        <TbLayoutGridFilled />
                        Xem tất cả sản phẩm
                    </Link>
                </Button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px]">
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return <li key={index}><Product /></li>
                    })
                }
            </ul>
        </div>
    )
}