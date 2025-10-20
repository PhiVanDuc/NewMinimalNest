import Link from "next/link";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { FiShoppingCart } from "react-icons/fi";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const standards = [
    "Sự thoải mái tuyệt đối",
    "Tinh tế trong từng chất lượng",
    "Vẻ đẹp tối giản"
];

export default function Compliment() {
    return (
        <section
            className={cn(
                "relative flex flex-col items-start justify-between gap-[40px]",
                "xl:flex-row xl:gap-[100px]"
            )}
        >
            <div
                className={cn(
                    "flex flex-col items-center w-full",
                    "xl:block xl:w-[550px]"
                )}
            >
                <h2
                    className={cn(
                        "mb-[20px] text-center text-[30px] font-bold",
                        "md:text-[36px]",
                        "xl:text-left xl:text-[48px]"
                    )}
                >
                    Nâng tầm cảm xúc với nội thất êm ái
                </h2>

                <p
                    className={cn(
                        "mb-[60px] text-[14px] text-zinc-500",
                        "md:mb-[80px] md:text-[16px]"
                    )}
                >
                    Không gian xung quanh bạn ảnh hưởng sâu sắc đến tâm trạng. Khám phá cách nội thất tối giản, chất lượng cao của chúng tôi có thể biến ngôi nhà bạn thành một chốn yên bình, thoải mái. Tạo nên môi trường tinh tế, hài hòa, giúp nâng tầm cảm xúc với thiết kế đơn giản nhưng đầy phong cách và tiện nghi.
                </p>

                <div className="w-full space-y-[40px]">
                    <ul className="space-y-[20px]">
                        {
                            standards.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-x-[15px]"
                                    >
                                        <span className="flex items-center justify-center bg-theme-main/60 rounded-full w-[28px] aspect-square">
                                            <Check size={18} className="text-white" />
                                        </span>

                                        <p
                                            className={cn(
                                                "text-[14px]",
                                                "md:text-[16px]"
                                            )}
                                        >
                                            {item}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <Button
                        className="px-[20px] py-[25px] gap-[12px] bg-theme-main hover:bg-theme-main/95 cursor-pointer transition-colors"
                        asChild
                    >
                        <Link href="/products">
                            <FiShoppingCart className="!size-5" />
                            Bắt đầu mua sắm
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="relative flex items-center self-stretch gap-x-[30px]">
                <div
                    className={cn(
                        "w-full h-[300px] rounded-[15px] bg-slate-300 overflow-hidden",
                        "xl:w-[500px] xl:h-full"
                    )}
                >
                    <Image
                        src="/images/compliment.webp"
                        alt="Compliment Image"
                        width={2000}
                        height={2000}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>

                <div
                    className={cn(
                        "shrink-0 self-stretch hidden items-center",
                        "xl:flex"
                    )}
                >
                    <Image
                        src="/images/compliment-decor.png"
                        alt="Decor image"
                        width={45}
                        height={45}
                        className="w-[45px] aspect-square object-cover object-center"
                        loading="lazy"
                    />
                </div>

                <div
                    className={cn(
                        "absolute bottom-0 left-[-50%] hidden items-center gap-x-[15px] text-[16px] px-[25px] py-[18px] rounded-[10px] border border-theme-main/30 bg-white",
                        "xl:flex"
                    )}
                >
                    <span className="flex items-center justify-center border-[2px] border-theme-main rounded-full w-[25px] aspect-square">
                        <Check size={15} className="text-theme-main" />
                    </span>

                    <p>Chúng tôi cam kết sự thoải mái cho bạn.</p>
                </div>
            </div>
        </section>
    )
}