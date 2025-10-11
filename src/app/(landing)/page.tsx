import Hero from "@/app/(landing)/components/Hero/Hero";
import Compliment from "@/app/(landing)/components/Compliment";
import FeaturedProduct from "@/app/(landing)/components/FeaturedProduct";
import LatestProduct from "@/app/(landing)/components/LatestProduct";
import Policy from "@/app/(landing)/components/Policy";
import Newsletter from "./components/Newsletter";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div
            className={cn(
                "pb-[50px]",
                "md:pb-[80px]"
            )}
        >
            <Hero />

            <div
                className={cn(
                    "mt-[100px] space-y-[150px] container-horizontal",
                    "md:mt-[150px]"
                )}
            >
                <Compliment />
                <FeaturedProduct />
                {/* <LatestProduct />
                <Policy />
                <Newsletter /> */}
            </div>
        </div>
    )
}