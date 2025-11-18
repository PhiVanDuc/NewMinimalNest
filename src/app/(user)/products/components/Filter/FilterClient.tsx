"use client"

import Drawer from "@/components/Drawer";
import FilterOptions from "@/app/(user)/products/components/Filter/FilterOptions";
import FilterActionButtons from "@/app/(user)/products/components/Filter/FilterActionButtons";

import drawerIds from "@/consts/drawer-ids";

export default function FilterClient() {
    return (
        <Drawer
            id={drawerIds.filter}
            className="gap-[25px]"
        >
            <FilterOptions />
            <FilterActionButtons />
        </Drawer>
    )
}