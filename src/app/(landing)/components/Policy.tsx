import { Send } from "lucide-react";
import { Timer } from "lucide-react";
import { Headset } from "lucide-react";

import { cn } from "@/lib/utils";

const policies = [
    {
        id: 1,
        title: "Giao Hàng Miễn Phí",
        desc: "Tận hưởng dịch vụ giao hàng nhanh chóng và miễn phí cho mọi đơn hàng — không điều kiện, không ràng buộc, giao tận nơi đáng tin cậy.",
        borderColor: "#05DF7230",
        backgroundColor: "#05DF7210",
        iconBackgroundColor: "#05DF72",
        icon: <Send
            className={cn(
                "shrink-0 text-[16px] text-white",
                "md:text-[22px]"
            )}
        />
    },
    {
        id: 2,
        title: "Đổi Trả Dễ Dàng Trong 7 Ngày",
        desc: "Đổi ý? Không sao cả. Bạn có thể đổi hoặc trả lại sản phẩm trong vòng 7 ngày.",
        borderColor: "#FF890430",
        backgroundColor: "#FF890410",
        iconBackgroundColor: "#FF8904",
        icon: <Timer
            className={cn(
                "shrink-0 text-[16px] text-white",
                "md:text-[22px]"
            )}
        />
    },
    {
        id: 3,
        title: "Hỗ Trợ Khách Hàng 24/7",
        desc: "Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc. Liên hệ ngay để được tư vấn và giải đáp nhanh chóng.",
        borderColor: "#A684FF30",
        backgroundColor: "#A684FF10",
        iconBackgroundColor: "#A684FF",
        icon: <Headset
            className={cn(
                "shrink-0 text-[16px] text-white",
                "md:text-[22px]"
            )}
        />
    }
];

export default function Policy() {
    return (
        <section className="space-y-[80px]">
            <header className="flex flex-col items-center space-y-[8px] text-center">
                <h2
                    className={cn(
                        "text-[22px] font-semibold",
                        "md:text-[26px]"
                    )}
                >
                    Chính Sách
                </h2>

                <p
                    className={cn(
                        "text-[14px] text-zinc-600 max-w-[800px]",
                        "md:text-[16px]"
                    )}
                >
                    Chúng tôi mang đến dịch vụ hàng đầu và sự tiện lợi tối đa để đảm bảo trải nghiệm mua sắm của bạn diễn ra suôn sẻ, an toàn và hoàn toàn không phiền toái.
                </p>
            </header>

            <div className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[40px]">
                {
                    policies.map(policy => {
                        return (
                            <div
                                key={policy.id}
                                className={cn(
                                    "relative flex items-center justify-center p-[40px] w-[400px] aspect-video rounded-[10px] border",
                                    "md:py-[20px]"
                                )}
                                style={{
                                    background: policy.backgroundColor,
                                    borderColor: policy.borderColor
                                }}
                            >
                                <button
                                    className={cn(
                                        "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[40px] aspect-square rounded-[8px] cursor-pointer transition-all",
                                        "md:w-[45px]"
                                    )}
                                    style={{
                                        background: policy.iconBackgroundColor
                                    }}
                                >
                                    {policy.icon}
                                </button>

                                <div className="text-center space-y-[15px]">
                                    <h3 className="font-medium">{policy.title}</h3>

                                    <p
                                        className={cn(
                                            "text-[14px] text-zinc-600",
                                            "md:text-[16px]"
                                        )}
                                    >
                                        {policy.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
