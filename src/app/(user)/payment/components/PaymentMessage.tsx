"use client"

import { Textarea } from "@/components/ui/textarea";

interface Props {
    isEdit?: boolean
}

export default function PaymentMessage({ isEdit = true }: Props) {
    return (
        <div className="space-y-[20px]">
            <header>
                <h2 className="sub-header-basic">Lời nhắn</h2>
                <p className="desc-basic">Bạn có thể để lại lời nhắn cho cửa hàng như thời gian giao hàng, thay đổi trong giao dịch v.v</p>
            </header>

            <Textarea
                placeholder="Gửi lời nhắn của bạn vào đây . . ."
                disabled={isEdit ? false : true}
            />
        </div>
    )
}
