"use client"

import { Send } from "lucide-react";
import { Timer } from "lucide-react";
import { Headset } from "lucide-react";

const policies = [
    {
        id: 1,
        title: "Giao Hàng Miễn Phí",
        desc: "Tận hưởng dịch vụ giao hàng nhanh chóng và miễn phí cho mọi đơn hàng — không điều kiện, không ràng buộc, giao tận nơi đáng tin cậy.",
        borderColor: "#05DF7230",
        backgroundColor: "#05DF7210",
        iconBackgroundColor: "#05DF72",
        icon: <Send className="shrink-0 text-[22px] text-white" />
    },
    {
        id: 2,
        title: "Đổi Trả Dễ Dàng Trong 7 Ngày",
        desc: "Đổi ý? Không sao cả. Bạn có thể đổi hoặc trả lại sản phẩm trong vòng 7 ngày.",
        borderColor: "#FF890430",
        backgroundColor: "#FF890410",
        iconBackgroundColor: "#FF8904",
        icon: <Timer className="shrink-0 text-[22px] text-white" />
    },
    {
        id: 3,
        title: "Hỗ Trợ Khách Hàng 24/7",
        desc: "Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc. Liên hệ ngay để được tư vấn và giải đáp nhanh chóng.",
        borderColor: "#A684FF30",
        backgroundColor: "#A684FF10",
        iconBackgroundColor: "#A684FF",
        icon: <Headset className="shrink-0 text-[22px] text-white" />
    }
];


export default function Policy() {
    return (
        <section className="space-y-[80px]">
            <header className="flex flex-col items-center space-y-[8px] text-center">
                <h2 className="text-[26px] font-semibold">Chính Sách</h2>
                <p className="text-[16px] text-zinc-600 max-w-[800px]">Chúng tôi mang đến dịch vụ hàng đầu và sự tiện lợi tối đa để đảm bảo trải nghiệm mua sắm của bạn diễn ra suôn sẻ, an toàn và hoàn toàn không phiền toái.</p>
            </header>

            <div className="flex items-center justify-center gap-[20px]">
                {
                    policies.map(policy => {
                        return (
                            <div
                                key={policy.id}
                                className="relative flex items-center justify-center p-[20px] w-[400px] aspect-video rounded-[10px] border"
                                style={{
                                    background: policy.backgroundColor,
                                    borderColor: policy.borderColor
                                }}
                            >
                                <button
                                    className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[45px] aspect-square rounded-[8px] cursor-pointer transition-all"
                                    style={{
                                        background: policy.iconBackgroundColor
                                    }}
                                >
                                    {policy.icon}
                                </button>

                                <div className="text-center space-y-[15px]">
                                    <h3 className="font-medium">{policy.title}</h3>
                                    <p className="text-zinc-600">{policy.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
