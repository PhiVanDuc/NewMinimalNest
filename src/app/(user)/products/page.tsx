import Banner from "@/app/(user)/products/components/Banner";
import ButtonToggleFilter from "./components/ButtonToggleFilter";
import ProductList from "@/app/(user)/products/components/ProductList";
import BreadcrumbCustom from "@/components/BreadcrumbCustom";

export default function Page() {
    return (
        <div className="space-y-[80px]">
            <div className="space-y-[20px]">
                <Banner />
                <BreadcrumbCustom />
            </div>

            <div className="space-y-[20px]">
                <ButtonToggleFilter />
                <ProductList />
            </div>
        </div>
    )
}