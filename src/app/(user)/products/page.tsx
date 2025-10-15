import Banner from "@/app/(user)/products/components/Banner";
import ButtonToggleFilter from "./components/ButtonToggleFilter";
import ProductList from "@/app/(user)/products/components/ProductList";
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
                <ButtonToggleFilter />
                <ProductList searchParams={parseSearchParams} />
            </div>
        </div>
    )
}