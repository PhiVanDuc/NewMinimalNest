"use client"

import { useState } from "react";

import Combobox from "@/components/Combobox";

import roles from "@/consts/roles";

import type { RoleType } from "@/consts/roles";

interface PropsType {
    role: RoleType
}

export default function AccountRoleColumn({ role }: PropsType) {
    const [selectedRole, setSelectedRole] = useState(role);

    return <></>
}
