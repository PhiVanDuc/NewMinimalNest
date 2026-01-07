"use client"

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Combobox from "@/components/Combobox";

import ROLES from "@/consts/roles";
import { toast } from "@pheralb/toast";
import { adminUpdateAccountRole } from "@/services/accounts/admin";

interface Props {
    id: string,
    role: Role
}

const roles = Object.values(ROLES).map(role => {
    return {
        label: role.label,
        value: role.value
    }
});

export default function AccountRoleColumn({ id, role }: Props) {
    const queryClient = useQueryClient();
    const [currentRole, setCurrentRole] = useState(role);
    const [previousRole, setPreviousRole] = useState(role);

    const mutation = useMutation({
        mutationFn: (role: Role) => adminUpdateAccountRole(id, role),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                queryClient.invalidateQueries({ queryKey: ["adminAccounts"] })
            }
            else {
                setCurrentRole(previousRole);
                toast.error({ text: "Thất bại", description: message });
            }
        },
        onError: (error) => {
            console.log("useMutation");
            console.log(error);

            setCurrentRole(previousRole);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSelectRole = (value: string) => {
        const nextRole = value as Role;
        if (!nextRole) return;

        setPreviousRole(currentRole);
        setCurrentRole(nextRole);

        mutation.mutate(nextRole);
    }

    return (
        <Combobox
            options={roles}
            value={currentRole}
            onSelect={handleSelectRole}
            className="w-[200px] justify-between"
            disabled={mutation.isPending}
        />
    )
}