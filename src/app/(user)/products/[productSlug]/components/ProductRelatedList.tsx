"use client"

import Product from "@/components/Product";

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";

export default function ProductRelatedList() {
    return (
        <div className='space-y-[30px]'>
            <h2 className="header-basic">
                Sản phẩm liên quan
            </h2>

            <Carousel>
                <CarouselContent className="-ml-[20px]">
                    <CarouselItem
                        className={cn(
                            "pl-[20px]",
                            "sm:basis-1/2",
                            "lg:basis-1/3",
                            "2xl:basis-1/4"
                        )}
                    >
                        <Product />
                    </CarouselItem>

                    <CarouselItem
                        className={cn(
                            "pl-[20px]",
                            "sm:basis-1/2",
                            "lg:basis-1/3",
                            "2xl:basis-1/4"
                        )}
                    >
                        <Product />
                    </CarouselItem>

                    <CarouselItem
                        className={cn(
                            "pl-[20px]",
                            "sm:basis-1/2",
                            "lg:basis-1/3",
                            "2xl:basis-1/4"
                        )}
                    >
                        <Product />
                    </CarouselItem>

                    <CarouselItem
                        className={cn(
                            "pl-[20px]",
                            "sm:basis-1/2",
                            "lg:basis-1/3",
                            "2xl:basis-1/4"
                        )}
                    >
                        <Product />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
