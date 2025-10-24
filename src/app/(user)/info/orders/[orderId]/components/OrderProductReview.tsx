"use client"

import OrderProductReviewForm from "@/app/(user)/info/orders/[orderId]/components/OrderProductReviewForm";

export default function OrderProductReview() {
    return (
        <div className='space-y-[20px]'>
            <header>
                <h2 className="sub-header-basic">Đánh giá sản phẩm</h2>
                <p className="desc-basic">Chia sẻ trải nghiệm của bạn để giúp mọi người chọn được sản phẩm ưng ý hơn!</p>
            </header>

            <ul className="space-y-[40px]">
                {
                    Array.from({ length: 2 }).map((_, index) => {
                        return <OrderProductReviewForm key={index} />
                    })
                }
            </ul>
        </div>
    )
}
