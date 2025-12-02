import { Input } from "@/components/ui/input";

import { cn } from "@/libs/utils";

export default function Newsletter() {
    return (
        <div className="space-y-[60px]">
            <header className="flex flex-col items-center space-y-[8px] text-center">
                <h2 className="header-basic">
                    Newsletter
                </h2>

                <p className="desc-basic max-w-[800px]">
                    Đăng ký để nhận các ưu đãi độc quyền, sản phẩm mới và những cập nhật đặc biệt được gửi thẳng đến hộp thư của bạn mỗi tuần.
                </p>
            </header>

            <div className="flex justify-center">
                <div className="relative w-full max-w-[800px]">
                    <Input
                        placeholder="Nhập địa chỉ email tại đây . . ."
                        className={cn(
                            "rounded-full py-[24px] px-[20px] pr-[106px] text-[14px] leading-tight",
                            "md:text-[16px] md:py-[26px] md:pr-[140px]"
                        )}
                    />

                    <button
                        className={cn(
                            "absolute right-[5px] top-[5px] bottom-[5px] w-fit px-[20px] rounded-full bg-theme-main text-[14px] text-white font-semibold leading-tight cursor-pointer",
                            "md:px-[30px] md:text-[15px]"
                        )}
                    >
                        Theo Dõi
                    </button>
                </div>
            </div>
        </div>
    )
}
