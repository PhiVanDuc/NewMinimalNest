"use client"

import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { IoFilter } from "react-icons/io5";

import drawerSlice from "@/store/slices/drawerSlice";
import drawerIds from "@/consts/drawer-ids";

export default function FilterButtonOpen() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            drawerSlice.actions.open(drawerIds.filter)
        );
    }

    return (
        <Button
            className="gap-[14px] rounded-full bg-zinc-800 hover:bg-zinc-800/95 transition-colors cursor-pointer"
            onClick={handleClick}
        >
            <IoFilter className="!size-5" />
            <span>Bộ lọc</span>
        </Button>
    )
}