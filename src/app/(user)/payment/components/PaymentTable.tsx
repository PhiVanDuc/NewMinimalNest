"use client"

import DataTable from "@/components/DataTable";
import paymentColumns from "@/app/(user)/payment/payment-columns";

export default function PaymentTable() {
    return (
        <DataTable
            data={[1, 1, 1]}
            columns={paymentColumns}
        />
    )
}
