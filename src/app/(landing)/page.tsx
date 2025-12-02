import Hero from "@/app/(landing)/components/Hero/Hero";
import Compliment from "@/app/(landing)/components/Compliment";
import FeaturedProducts from "@/app/(landing)/components/FeaturedProducts";
import LatestProducts from "@/app/(landing)/components/LatestProducts";
import Policies from "@/app/(landing)/components/Policies";
import Newsletter from "@/app/(landing)/components//Newsletter";

import { cn } from "@/libs/utils";

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
                <FeaturedProducts />
                <LatestProducts />
                <Policies />
                <Newsletter />
            </div>
        </div>
    )
}