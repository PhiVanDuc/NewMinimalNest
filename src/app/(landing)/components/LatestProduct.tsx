"use client"

import { Button } from "@/components/ui/button";
import Product from "@/components/Product";

export default function LatestProduct() {
    return (
        <section className="space-y-[60px]">
            <div className="flex items-center justify-between">
                <header className="space-y-[8px]">
                    <h2 className="text-[26px] font-semibold">Sản Phẩm Mới</h2>
                    <p className="text-[16px] text-zinc-600 max-w-[800px]">Cập nhật ngay những sản phẩm mới vừa ra mắt, kết hợp giữa thẩm mỹ hiện đại và chất lượng vượt trội, tạo nên điểm nhấn hoàn hảo cho ngôi nhà của bạn.</p>
                </header>

                <Button className="rounded-full cursor-pointer">Xem tất cả sản phẩm</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[15px]">
                {
                    Array.from({ length: 8 }).map((_, index) => {
                        return <Product key={index} />
                    })
                }
            </div>
        </section>
    )
}
