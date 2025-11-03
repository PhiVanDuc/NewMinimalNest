"use client"

import { useState } from "react";
import Combobox from "@/components/Combobox";

export default function AccountsRoleColumn() {
    const [role, setRole] = useState("khach-hang");

    const handleChange = (value: string) => {
        setRole(value);
    }

    return (
        <Combobox
            optionList={[
                {
                    label: "Khách hàng",
                    value: "khach-hang"
                },
                {
                    label: "Quản trị viên",
                    value: "quan-tri-vien"
                }
            ]}
            value={role}
            onChange={handleChange}
        />
    )
}
