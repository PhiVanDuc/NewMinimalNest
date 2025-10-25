"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function ProductDetailInfo() {
    return (
        <div className="space-y-[5px]">
            <Accordion
                className="space-y-[20px]"
                type="multiple"
                defaultValue={["specification"]}
            >
                <AccordionItem value="specification">
                    <AccordionTrigger
                        className={cn(
                            "p-0 text-[14px] text-zinc-600 [&[data-state=open]]:text-zinc-800 font-medium capitalize hover:bg-zinc-white [&[data-state=open]]:bg-white",
                            "sm:text-[15px]"
                        )}
                    >
                        Thông số kỹ thuật
                    </AccordionTrigger>

                    <AccordionContent>
                        <ul className="space-y-[15px]">
                            <li
                                className={cn(
                                    "px-[20px] py-[8px] rounded-[6px] border border-theme-main/10 bg-theme-main/5 text-theme-main text-[14px]",
                                    "sm:text-[15px]"
                                )}
                            >
                                Kích thước của sản phẩm H là chiều cao, W là chiều rộng và D là độ sâu.
                            </li>

                            <li
                                className={cn(
                                    "flex flex-col flex-wrap justify-between gap-[5px] text-[14px]",
                                    "sm:flex-row sm:items-center sm:text-[15px]"
                                )}
                            >
                                <p className="shrink-0 text-zinc-600">Kích thước sản phẩm:</p>
                                <p className="shrink-0 font-semibold">H84.5 x W64 x D75cm</p>
                            </li>

                            <li
                                className={cn(
                                    "flex flex-col flex-wrap justify-between gap-[5px] text-[14px]",
                                    "sm:flex-row sm:items-center sm:text-[15px]"
                                )}
                            >
                                <p className="text-zinc-600">Trọng lượng sản phẩm:</p>
                                <p className="font-semibold">15.6kg</p>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="desc">
                    <AccordionTrigger
                        className={cn(
                            "p-0 text-[14px] text-zinc-600 [&[data-state=open]]:text-zinc-800 font-medium capitalize hover:bg-zinc-white [&[data-state=open]]:bg-white",
                            "sm:text-[15px]"
                        )}
                    >
                        Mô tả sản phẩm
                    </AccordionTrigger>

                    <AccordionContent>
                        <p
                            className={cn(
                                "text-[14px] text-zinc-600",
                                "sm:text-[15px]"
                            )}
                        >
                            Nội dung mô tả sản phẩm
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
