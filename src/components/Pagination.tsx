"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

interface PropsType {
    page: string,
    totalPage: string,
    listRef?: React.RefObject<null | HTMLElement>
}

export default function Pagination({ page, totalPage, listRef }: PropsType) {
    const router = useRouter();
    const [pageValue, setPageValue] = useState((!isPositiveIntegerString(page) || Number(page) > Number(totalPage)) ? totalPage : page);

    const handleChangePageValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const positivePageValueString = toPositiveIntegerString(e.target.value);
        const positiveTotalPageString = toPositiveIntegerString(totalPage);

        if (!positivePageValueString) setPageValue("");
        if (positivePageValueString.length > 16) setPageValue("1");

        const positivePageValue = Number(positivePageValueString);
        const positiveTotalPage = Number(toPositiveIntegerString(totalPage));

        if (positivePageValue > positiveTotalPage) setPageValue(positiveTotalPageString);
        else setPageValue(positivePageValueString);
    }

    const handleBlurInput = () => {
        if (pageValue === "") setPageValue("1");
    }

    const navigatePage = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", value);
        router.replace(`?${params.toString()}`, { scroll: false });

        setTimeout(() => {
            if (listRef && listRef.current) {
                const top = listRef.current.offsetTop - 100;
                window.scrollTo({ top: top > 0 ? top : 0, behavior: "smooth" });
            }
            else window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
    }

    const handlePressNavigate = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        navigatePage(pageValue);
    }

    const handleClickNavigate = (direction: "prev" | "next") => {
        let positivePageValue = Number(pageValue);
        const positiveTotalPage = Number(toPositiveIntegerString(totalPage));

        if (direction === "prev" && positivePageValue > 1) positivePageValue -= 1;
        else if (direction === "next" && positivePageValue < positiveTotalPage) positivePageValue += 1;

        setPageValue(`${positivePageValue}`);
        navigatePage(`${positivePageValue}`);
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
                    onBlur={handleBlurInput}
                    onKeyUp={handlePressNavigate}
                    className="h-[30px] w-[50px] py-[4px] border-2 text-white focus-visible:border-white focus-visible:ring-white/40"
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
                    onClick={() => { handleClickNavigate("prev") }}
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
                    onClick={() => { handleClickNavigate("next") }}
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