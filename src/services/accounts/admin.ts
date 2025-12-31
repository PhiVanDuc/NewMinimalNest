"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toParams from "@/utils/to-params";

import type { RoleConstType } from "@/consts/roles-const";
import type { AccountsDataType } from "@/app/admin/accounts/types";

export const adminGetAccounts = async <PageType, FilterDataType extends Record<string, string>>(page: PageType, filter: FilterDataType) => {
    const params = toParams({ page, ...filter });
    return privateFetch.get<AccountsDataType>(`/admin/accounts?${params}`);
}

export const adminUpdateAccountRole = async <IdType>(id: IdType, role: RoleConstType ) => {
    return privateFetch.patch(`/admin/accounts/${id}/role`, { role });
}