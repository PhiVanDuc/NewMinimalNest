import Link from "next/link";

import { Button } from "@/components/ui/button";
import Product from "@/components/Product";

import { TbLayoutGridFilled } from "react-icons/tb";
import { cn } from "@/lib/utils";

export default function LatestProduct() {
    // Fetch data nếu cần

    return (
        <section className="space-y-[60px]">
            <div
                className={cn(
                    "flex flex-col items-center justify-between gap-[40px]",
                    "lg:flex-row"
                )}
            >
                <header className="space-y-[10px]">
                    <h2 className="header-basic">
                        Sản Phẩm Mới
                    </h2>
                    <p className="desc-basic max-w-[800px]">
                        Cập nhật ngay những sản phẩm mới vừa ra mắt, kết hợp giữa thẩm mỹ hiện đại và chất lượng vượt trội, tạo nên điểm nhấn hoàn hảo cho ngôi nhà của bạn.
                    </p>
                </header>

                <Button
                    className="rounded-full cursor-pointer"
                    asChild
                >
                    <Link href="/products/search?statuses=moi">
                        <TbLayoutGridFilled />
                        Xem tất cả sản phẩm
                    </Link>
                </Button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {
                    Array.from({ length: 6 }).map((_, index) => {
                        return <li key={index}><Product /></li>
                    })
                }
            </ul>
        </section>
    )
}