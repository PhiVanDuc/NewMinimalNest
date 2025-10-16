import FilterOpenButton from "../components/Filter/FilterOpenButton";
import ProductList from "../components/ProductList/ProductList";

import { cn } from "@/lib/utils";

interface PropsType {
    searchParams: Promise<{ page?: string }>
}
export default async function Page({ searchParams }: PropsType) {
    const parseSearchParams = await searchParams;

    return (
        <div className="space-y-[50px]">
            <header className="space-y-[8px]">
                <h1
                    className={cn(
                        "text-[22px] font-semibold",
                        "md:text-[26px]"
                    )}
                >
                    Tìm Kiếm
                </h1>

                <p
                    className={cn(
                        "text-[14px] text-zinc-600",
                        "md:text-[16px]"
                    )}
                >
                    Có <span className="text-theme-main font-medium">250</span> sản phẩm được tìm thấy.
                </p>
            </header>

            <div className="space-y-[20px]">
                <FilterOpenButton />
                <ProductList searchParams={parseSearchParams} />
            </div>
        </div>
    )
}