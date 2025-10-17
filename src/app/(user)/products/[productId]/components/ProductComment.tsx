"use client"

import { FaStar } from "react-icons/fa6";

import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

export default function ProductComment() {
    return (
        <section className='space-y-[40px]'>
            <h2 className="header-basic">
                Nhận xét
            </h2>

            <div
                className={cn(
                    "grid grid-cols-1 gap-[20px]",
                    "md:grid-cols-2"
                )}
            >
                {
                    Array.from({ length: 4 }).map((_, index) => {
                        return (
                            <div
                                key={index}
                                className='p-[15px] rounded-[10px] border border-zinc-200'
                            >
                                <p className='text-[17px] font-medium capitalize mb-[8px]'>Tên người mua</p>

                                <div
                                    className={cn(
                                        "flex flex-col justify-between gap-[10px] mb-[20px]",
                                        "md:flex-row md:items-center"
                                    )}
                                >
                                    <div className='flex items-center gap-[5px] text-[18px] text-amber-500'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <p
                                        className={cn(
                                            "text-[14px] text-zinc-600 font-medium",
                                            "sm:text-[15px]"
                                        )}
                                    >
                                        13 Tháng 12 2024
                                    </p>
                                </div>

                                <p
                                    className={cn(
                                        "text-[14px] text-zinc-600 mb-[15px]",
                                        "sm:text-[15px]"
                                    )}
                                >
                                    &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sit recusandae quia doloribus rem, ducimus minima quis porro id? Voluptatibus est dicta, quasi enim excepturi quam! At adipisci eius veniam!Ut repellat, aliquid quibusdam nam et sit veniam beatae, numquam ex commodi impedit animi, omnis accusantium.&quot;
                                </p>

                                <div className="w-[50px] aspect-square rounded-full bg-zinc-300" />
                            </div>
                        )
                    })
                }
            </div>

            <Button>Xem thêm . . .</Button>
        </section>
    )
}
