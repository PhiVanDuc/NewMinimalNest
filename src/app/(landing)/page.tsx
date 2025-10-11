import Hero from "@/app/(landing)/components/Hero/Hero";
import Compliment from "@/app/(landing)/components/Compliment";
import FeaturedProduct from "@/app/(landing)/components/FeaturedProduct";
import LatestProduct from "@/app/(landing)/components/LatestProduct";
import Policy from "@/app/(landing)/components/Policy";
import Newsletter from "./components/Newsletter";

export default function Page() {
    return (
        <div className="pb-[80px]">
            <Hero />

            {/* <div className="mt-[150px] space-y-[150px] container-horizontal">
                <Compliment />
                <FeaturedProduct />
                <LatestProduct />
                <Policy />
                <Newsletter />
            </div> */}
        </div>
    )
}