import Header from "@/components/Header";
import CouponList from "@/app/(user)/coupons/CouponList";

export default async function Page() {
    // Fetch data nếu cần

    // Xử lý check page < || > totalPage

    return (
        <div className="space-y-[40px]">
            <Header>
                <h1 className="header-basic">Phiếu giảm giá</h1>
                <p className="desc-basic">Khám phá các phiếu giảm giá hiện có và tận dụng ưu đãi từ <span className="font-medium text-theme-main">Minimal Nest</span>.</p>
            </Header>

            <CouponList />
        </div>
    )
}