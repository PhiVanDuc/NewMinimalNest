"use client"

import Header from "@/components/Header";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import inventoryStatuses from "@/consts/inventory-statuses";

export default function InventoryAnalysis() {
    return (
        <div className="p-[20px] space-y-[20px] rounded-[10px] border border-zinc-300">
            <Header isBreadcrumb={false}>
                <h2 className="sub-header-basic">Phân tích</h2>
                <p className="desc-basic">Mô tả cho phần phân tích kho hàng này.</p>
            </Header>

            <div className="flex gap-[8px]">
                {
                    Object.keys(inventoryStatuses).map(key => {
                        const k = key as keyof typeof inventoryStatuses;

                        return (
                            <Tooltip
                                key={k}
                                delayDuration={200}
                            >
                                <TooltipTrigger className="w-full cursor-pointer">
                                    <div
                                        className="h-[10px] rounded-full bg-amber-400"
                                        style={{ background: inventoryStatuses[k].colorCode }}
                                    />
                                </TooltipTrigger>

                                <TooltipContent>33.33%</TooltipContent>
                            </Tooltip>
                        )
                    })
                }
            </div>

            <div className="flex items-center gap-[40px]">
                {
                    Object.keys(inventoryStatuses).map(key => {
                        const k = key as keyof typeof inventoryStatuses;

                        return (
                            <div
                                key={k}
                                className="flex items-center gap-[10px]"
                            >
                                <div
                                    className="size-[15px] rounded-full"
                                    style={{ background: inventoryStatuses[k].colorCode }}
                                />

                                <p className="text-[15px] text-zinc-700 font-medium">{inventoryStatuses[k].label}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
