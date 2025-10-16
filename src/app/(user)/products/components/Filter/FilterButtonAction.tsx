"use client"

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { Search } from "lucide-react";
import DrawerPartTitle from "@/components/DrawerPartTitle";

import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

import { ReduxStateType } from "@/store/store";

export default function FilterButtonAction() {
    const router = useRouter();

    const dispatch = useDispatch();
    const filter = useSelector((state: ReduxStateType) => state.filterProduct);

    const handleClose = () => {
        dispatch(
            drawerSlice.actions.close(drawerIds.filter)
        );
    }

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (filter.productName.trim()) {
            params.set("productName", filter.productName.trim());
        }

        if (filter.categories.length > 0) {
            params.set(
                "categories",
                filter.categories.map((c) => c.slug).join(",")
            );
        }

        if (filter.statuses.length > 0) {
            params.set(
                "statuses",
                filter.statuses.map((s) => s.slug).join(",")
            );
        }

        if (filter.colors.length > 0) {
            params.set(
                "colors",
                filter.colors.map((c) => c.slug).join(",")
            );
        }

        if (filter.priceRange) params.set("priceRange", filter.priceRange.slug);

        let query = params.toString();
        query = query.replace(/%2C/g, ",");

        if (query) {
            const href = `/products/search?${query}`;
            router.push(href);

            handleClose();
        }
    };

    return (
        <div className="space-y-[10px] px-[20px]">
            <DrawerPartTitle
                title="Hành động"
            />

            <div className="flex items-center gap-[5px]">
                <button
                    className="flex items-center justify-between gap-[10px] px-[20px] py-[9px] w-full text-[14px] text-white font-semibold rounded-[6px] bg-zinc-800 cursor-pointer"
                    onClick={handleSearch}
                >
                    Tìm kiếm

                    <Search size={18} className="translate-y-[-0.5px]" />
                </button>

                <button
                    className="shrink-0 px-[20px] py-[9px] text-[14px] text-zinc-800 font-semibold rounded-[6px] cursor-pointer"
                    onClick={handleClose}
                >
                    Đóng
                </button>
            </div>
        </div>
    )
}
