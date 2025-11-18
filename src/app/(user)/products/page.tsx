import Banner from "@/app/(user)/products/components/Banner/Banner";
import BreadcrumbCustom from "@/components/BreadcrumbCustom";
import FilterOpenButton from "@/app/(user)/products/components/Filter/FilterOpenButton";
import Products from "@/app/(user)/products/components/Products/Products";

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
                <FilterOpenButton />
                <Products searchParams={parseSearchParams} />
            </div>
        </div>
    )
}