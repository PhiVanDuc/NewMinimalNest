"use client"

import Drawer from "@/components/Drawer";
import FilterList from "@/app/(user)/products/components/Filter/FilterList";
import FilterButtonAction from "@/app/(user)/products/components/Filter/FilterButtonAction";

import drawerIds from "@/consts/drawer-ids";

export default function FilterClient() {
    return (
        <Drawer
            id={drawerIds.filter}
            className="gap-[25px]"
        >
            <FilterList />
            <FilterButtonAction />
        </Drawer>
    )
}