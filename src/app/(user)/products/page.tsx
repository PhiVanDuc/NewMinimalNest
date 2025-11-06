import Banner from "@/app/(user)/products/components/Banner/Banner"
import FilterButtonOpen from "@/app/(user)/products/components/Filter/FilterButtonOpen";
import ProductList from "@/app/(user)/products/components/ProductList/ProductList";
import BreadcrumbCustom from "@/components/BreadcrumbCustom";

interface PropsType {
    searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PropsType) {
    const parseSearchParams = await searchParams;

    return (
        <div className="space-y-[80px]">
            <div className="space-y-[20px]">
                <Banner />
                <BreadcrumbCustom />
            </div>

            <div className="space-y-[20px]">
                <FilterButtonOpen />
                <ProductList searchParams={parseSearchParams} />
            </div>
        </div>
    )
}