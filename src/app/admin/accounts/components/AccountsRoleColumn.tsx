"use client"

import { useState } from "react";

import Combobox from "@/components/Combobox";

export default function AccountsRoleColumn() {
    const [role, setRole] = useState("khach-hang");

    const handleSelectRole = (value: string) => {
        setRole(value);
    }

    return (
        <Combobox
            options={[
                {
                    label: "Khách hàng",
                    value: "khach-hang"
                },
                {
                    label: "Quản trị viên",
                    value: "quan-tri-vien"
                }
            ]}
            option={role}
            onSelect={handleSelectRole}
        />
    )
}
