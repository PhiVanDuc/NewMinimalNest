"use client"

import Product from "@/components/Product";
import { Button } from "@/components/ui/button";

export default function FeaturedProduct() {
    return (
        <section className="space-y-[60px]">
            <div className="flex items-center justify-between">
                <header className="space-y-[8px]">
                    <h2 className="text-[26px] font-semibold">Sản Phẩm Nổi Bật</h2>
                    <p className="text-[16px] text-zinc-600 max-w-[800px]">Khám phá những sản phẩm được đánh giá tốt nhất của chúng tôi mà khách hàng yêu thích. Từ thiết kế tinh tế đến chất lượng vượt trội, mang lại trải nghiệm hoàn hảo cho không gian sống của bạn.</p>
                </header>

                <Button className="rounded-full cursor-pointer">Xem tất cả sản phẩm</Button>
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