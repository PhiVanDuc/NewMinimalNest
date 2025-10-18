import DataTable from "@/components/DataTable";
import cartColumns from "./cart-columns";

import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="space-y-[40px]">
            <header>
                <h1 className="header-basic">Giỏ hàng</h1>
                <p className="desc-basic">Kiểm tra giỏ hàng của bạn và tiến hành thanh toán để hoàn tất đơn hàng.</p>
            </header>

            <div className="flex items-start gap-[40px]">
                <div
                    className={cn(
                        "space-y-[10px] w-full",
                        "xl:w-[70%]"
                    )}
                >
                    <p className="desc-basic">Bạn có <span className="px-[10px] py-[5px] rounded-[8px] bg-theme-main text-white text-[14px] font-medium">3 sản phẩm</span> trong giỏ hàng</p>

                    <DataTable
                        data={[1, 2, 3, 4]}
                        columns={cartColumns}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
}