"use client"

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import DrawerSectionTitle from "@/components/DrawerSectionTitle";

import { IoFilter } from "react-icons/io5";

import drawerIds from "@/consts/drawer-ids";
import drawerSlice from "@/store/slices/drawerSlice";

import type { ReduxStateType } from "@/store/store";

export default function FilterActionButtons() {
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
                filter.categories.map((c) => c.value).join(",")
            );
        }

        if (filter.statuses.length > 0) {
            params.set(
                "statuses",
                filter.statuses.map((s) => s.value).join(",")
            );
        }

        if (filter.colors.length > 0) {
            params.set(
                "colors",
                filter.colors.map((c) => c.value).join(",")
            );
        }

        if (filter.priceRange) params.set("priceRange", filter.priceRange.value);

        let query = params.toString();
        query = query.replace(/%2C/g, ",");

        if (query) {
            const href = `/products/filter?${query}`;
            router.push(href);

            handleClose();
        }
    };

    return (
        <div className="space-y-[10px] px-[20px]">
            <DrawerSectionTitle
                title="Hành động"
            />

            <div className="flex items-center gap-[5px]">
                <button
                    className="flex items-center justify-between gap-[10px] px-[20px] py-[9px] w-full text-[14px] text-white font-semibold rounded-[6px] bg-zinc-800 cursor-pointer"
                    onClick={handleSearch}
                >
                    Lọc sản phẩm

                    <IoFilter size={18} className="translate-y-[-0.5px]" />
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
