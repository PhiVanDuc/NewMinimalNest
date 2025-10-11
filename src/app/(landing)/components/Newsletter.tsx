"use client"

import { Input } from "@/components/ui/input";

export default function Newsletter() {
    return (
        <section className="space-y-[60px]">
            <header className="flex flex-col items-center space-y-[8px] text-center">
                <h2 className="text-[26px] font-semibold">Newsletter</h2>
                <p className="text-[16px] text-zinc-600 max-w-[800px]">Đăng ký để nhận các ưu đãi độc quyền, sản phẩm mới và những cập nhật đặc biệt được gửi thẳng đến hộp thư của bạn mỗi tuần.</p>
            </header>

            <div className="flex justify-center">
                <div className="relative w-full max-w-[800px]">
                    <Input
                        placeholder="Nhập địa chỉ email tại đây . . ."
                        className="rounded-full py-[28px] px-[20px] pr-[140px] leading-tight"
                    />

                    <button className="absolute right-[5px] top-1/2 -translate-y-1/2 w-fit px-[30px] py-[12px] rounded-full bg-theme-main text-[15px] text-white font-semibold leading-tight cursor-pointer">Theo Dõi</button>
                </div>
            </div>
        </section>
    )
}
