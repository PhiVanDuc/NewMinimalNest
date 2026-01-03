import Header from "@/components/Header";
import Products from "@/app/(user)/products/components/Products/Products";
import FilterOpenButton from "@/app/(user)/products/components/Filter/FilterOpenButton";

interface Props {
    searchParams: Promise<{ page?: string }>
}
export default async function Page({ searchParams }: Props) {
    const parseSearchParams = await searchParams;

    return (
        <div className="space-y-[50px]">
            <Header>
                <h1 className="header-basic">Kết quả</h1>
                <p className="desc-basic">Tìm thấy <span className="text-theme-main font-medium">250</span> sản phẩm phù hợp.</p>
            </Header>

            <div className="space-y-[20px]">
                <FilterOpenButton />
                <Products searchParams={parseSearchParams} />
            </div>
        </div>
    )
}