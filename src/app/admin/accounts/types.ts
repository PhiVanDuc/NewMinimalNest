import type { RankType } from "@/consts/ranks";
import type { RoleType } from "@/consts/roles";

export interface AccountDataType {
    id: string,
    username: string
    email: string,
    rank: RankType,
    role: RoleType,
    provider: string
}

export interface AccountsDataType {
    accounts: AccountDataType[],
    page: string,
    totalPage: string,
}

export interface AccountFilterDataType {
    username: string,
    rank: string
}