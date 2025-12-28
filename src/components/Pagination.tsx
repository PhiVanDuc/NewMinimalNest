"use client"

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Suspense } from "react";

import { Input } from "@/components/ui/input";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

import { cn } from "@/libs/utils";
import isPositiveIntegerString from "@/utils/is-positive-integer-string";
import toPositiveIntegerString from "@/utils/to-positive-integer-string";

interface PropsType {
    totalPage: string,
    listRef?: React.RefObject<null | HTMLElement>
}

function PaginationContent({ totalPage, listRef }: PropsType) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const pageParam = searchParams.get("page") || "1";
    const isValidPage = isPositiveIntegerString(pageParam);
    const [page, setPage] = useState(pageParam);

    useEffect(() => setPage(pageParam), [pageParam]);

    useEffect(() => {
        if (!isValidPage) router.replace("?");
        else if (Number(page) > Number(totalPage)) router.replace(`?page=${totalPage}`);
    }, [page, isValidPage, totalPage]);

    const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const positivePageString = toPositiveIntegerString(e.target.value);
        const positiveTotalPageString = toPositiveIntegerString(totalPage);

        if (!positivePageString) setPage("");

        const positivePage = Number(positivePageString);
        const positiveTotalPage = Number(positiveTotalPageString);

        if (positivePage > positiveTotalPage) setPage(positiveTotalPageString);
        else setPage(positivePageString);
    }

    const handleBlurInput = () => {
        if (page === "") setPage("1");
    }

    const navigatePage = (value: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", value);
        router.replace(`?${params.toString()}`, { scroll: false });

        requestAnimationFrame(() => {
            const top = listRef?.current ? listRef.current.offsetTop - 100 : 0;
            window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        });
    }

    const handlePressNavigate = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        navigatePage(page);
    }

    const handleClickNavigate = (direction: "prev" | "next") => {
        let positivePage = Number(page);
        const positiveTotalPage = Number(toPositiveIntegerString(totalPage));

        if (direction === "prev" && positivePage > 1) positivePage -= 1;
        else if (direction === "next" && positivePage < positiveTotalPage) positivePage += 1;

        setPage(`${positivePage}`);
        navigatePage(`${positivePage}`);
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
                    value={page}
                    onChange={handleChangePage}
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
                    disabled={page === "1"}
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
                    disabled={page === totalPage}
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

export default function Pagination({ totalPage, listRef }: PropsType) {
    return (
        <Suspense fallback="">
            <PaginationContent
                totalPage={totalPage}
                listRef={listRef}
            />
        </Suspense>
    )
}