"use client"

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Combobox from "@/components/Combobox";

import { toast } from "@pheralb/toast";
import rolesConst from "@/consts/roles-const";
import { adminUpdateAccountRole } from "@/services/accounts/admin";

import type { RoleConstType } from "@/consts/roles-const";

interface PropsType {
    id: string,
    role: RoleConstType
}

export default function AccountRoleColumn({ id, role }: PropsType) {
    const queryClient = useQueryClient();

    const [currentRole, setCurrentRole] = useState(role);
    const [previousRole, setPreviousRole] = useState(role);

    const mutation = useMutation({
        mutationFn: (role: RoleConstType) => adminUpdateAccountRole(id, role),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminAccounts"] })
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.log("useMutation");
            console.log(error);

            setCurrentRole(previousRole);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSelectRole = (value: string) => {
        const nextRole = value as RoleConstType;

        setPreviousRole(currentRole);
        setCurrentRole(nextRole);

        mutation.mutate(nextRole);
    }

    return (
        <Combobox
            options={Object.values(rolesConst)}
            value={currentRole}
            onSelect={handleSelectRole}
            className="w-[200px] justify-between"
            disabled={mutation.isPending}
        />
    )
}