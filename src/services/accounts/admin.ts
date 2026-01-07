"use client"

import privateFetch from "@/libs/fetch/private-fetch";
import toQueryString from "@/utils/to-query-string";

import type { Filter } from "@/app/admin/accounts/components/AccountFilter";

export const adminGetAccounts = async ({ page, limit, filter }: { page?: string, limit?: string, filter?: Filter }) => {
    const queryString = toQueryString({ page, limit, ...filter });
    return privateFetch.get<Accounts>(`/admin/accounts${queryString}`);
}

export const adminUpdateAccountRole = async <Id>(id: Id, role: Role ) => {
    return privateFetch.patch(`/admin/accounts/${id}/role`, { role });
}