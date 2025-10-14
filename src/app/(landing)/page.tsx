import Hero from "@/app/(landing)/components/Hero/Hero";
import Compliment from "@/app/(landing)/components/Compliment";
import FeaturedProduct from "@/app/(landing)/components/FeaturedProduct";
import LatestProduct from "@/app/(landing)/components/LatestProduct";
import Policy from "@/app/(landing)/components/Policy";
import Newsletter from "./components/Newsletter";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className={cn(
            "space-y-[100px] container-bottom",
            "md:space-y-[150px]"
        )}>
            <Hero />

            <div
                className={cn(
                    "space-y-[100px] container-horizontal",
                    "md:space-y-[150px]"
                )}
            >
                <Compliment />
                <FeaturedProduct />
                <LatestProduct />
                <Policy />
                <Newsletter />
            </div>
        </div>
    )
}