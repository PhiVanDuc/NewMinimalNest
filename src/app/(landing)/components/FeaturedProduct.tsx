import Link from "next/link";

import Product from "@/components/Product";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function FeaturedProduct() {
    // Fetch dữ liệu nếu cần

    return (
        <section className="space-y-[60px]">
            <div
                className={cn(
                    "flex flex-col items-center justify-between gap-[40px]",
                    "lg:flex-row"
                )}
            >
                <header className="space-y-[10px]">
                    <h2
                        className={cn(
                            "text-[22px] font-semibold",
                            "md:text-[26px]"
                        )}
                    >
                        Sản Phẩm Nổi Bật
                    </h2>
                    <p
                        className={cn(
                            "text-[14px] text-zinc-600 max-w-[800px]",
                            "md:text-[16px]"
                        )}
                    >
                        Khám phá những sản phẩm được đánh giá tốt nhất của chúng tôi mà khách hàng yêu thích. Từ thiết kế tinh tế đến chất lượng vượt trội, mang lại trải nghiệm hoàn hảo cho không gian sống của bạn.
                    </p>
                </header>

                <Button
                    className="rounded-full cursor-pointer"
                    asChild
                >
                    <Link href="">
                        Xem tất cả sản phẩm
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[15px]">
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return <Product key={index} />
                    })
                }
            </div>
        </section>
    )
}