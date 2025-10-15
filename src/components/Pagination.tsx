"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import positiveIntegerValidator from "@/utils/positive-integer-validator";

interface PropsType {
    page: string,
    totalPage: string,
    listRef: React.RefObject<null | HTMLElement>
}

export default function Pagination({ page, totalPage, listRef }: PropsType) {
    const router = useRouter();
    const [pageValue, setPageValue] = useState(!positiveIntegerValidator(page) ? "1" : page);

    const navigatePage = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", value);
        router.replace(`?${params.toString()}`, { scroll: false });

        setTimeout(() => {
            if (listRef.current) {
                const top = listRef.current.offsetTop - 100;
                window.scrollTo({ top: top > 0 ? top : 0, behavior: "smooth" });
            }
        }, 50);
    }

    const handleChangePageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        let value = target.value;

        if (value) {
            const isValid = positiveIntegerValidator(value);

            if (!isValid) value = "1";
            else if (Number(value) > Number(totalPage)) value = totalPage;
        }

        setPageValue(value);
    }

    const handleNavigateEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        // Fetch data

        navigatePage(pageValue);
    }

    const handleNavigate = (direction: "prev" | "next") => {
        let newPage = Number(pageValue);

        if (direction === "prev" && newPage > 1) newPage -= 1;
        else if (direction === "next" && newPage < Number(totalPage)) newPage += 1;

        // Fetch data

        setPageValue(`${newPage}`);
        navigatePage(`${newPage}`);
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[8px] px-[20px] py-[10px] rounded-full bg-theme-main">
                <p
                    className={cn(
                        "text-[14px] text-white",
                        "md:text-[15px]"
                    )}
                >
                    Trang
                </p>

                <Input
                    value={pageValue}
                    onChange={handleChangePageValue}
                    onKeyUp={handleNavigateEnter}
                    className="h-[30px] w-[50px] border-2 text-white focus-visible:border-white focus-visible:ring-white/40"
                />

                <p
                    className={cn(
                        "text-[14px] text-white",
                        "md:text-[15px]"
                    )}
                >
                    / {totalPage}
                </p>
            </div>

            <div className="flex gap-[8px] w-fit">
                <button
                    className="shrink-0 flex items-center justify-center w-[40px] aspect-square rounded-full bg-theme-main text-white cursor-pointer"
                    onClick={() => { handleNavigate("prev") }}
                    disabled={pageValue === "1"}
                >
                    <FaChevronLeft
                        className={cn(
                            "text-[14px]",
                            "md:text-[16px]"
                        )}
                    />
                </button>

                <button
                    className="shrink-0 flex items-center justify-center w-[40px] aspect-square rounded-full bg-theme-main text-white cursor-pointer"
                    onClick={() => { handleNavigate("next") }}
                    disabled={pageValue === totalPage}
                >
                    <FaChevronRight
                        className={cn(
                            "text-[14px]",
                            "md:text-[16px]"
                        )}
                    />
                </button>
            </div>
        </div>
    )
}