import Header from "@/components/Header";
import ProductList from "@/app/(user)/products/components/ProductList/ProductList";
import FilterOpenButton from "@/app/(user)/products/components/Filter/FilterOpenButton";

interface PropsType {
    searchParams: Promise<{ page?: string }>
}
export default async function Page({ searchParams }: PropsType) {
    const parseSearchParams = await searchParams;

    return (
        <div className="space-y-[50px]">
            <Header>
                <h1 className="header-basic">Tìm Kiếm</h1>
                <p className="desc-basic">Có <span className="text-theme-main font-medium">250</span> sản phẩm được tìm thấy.</p>
            </Header>

            <div className="space-y-[20px]">
                <FilterOpenButton />
                <ProductList searchParams={parseSearchParams} />
            </div>
        </div>
    )
}