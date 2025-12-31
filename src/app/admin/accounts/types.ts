import type { RankConstType } from "@/consts/ranks-const";
import type { RoleConstType } from "@/consts/roles-const";
import type { ProviderConstType } from "@/consts/providers-const";

export interface AccountDataType {
    id: string,
    username: string
    email: string,
    rank: RankConstType,
    role: RoleConstType,
    provider: ProviderConstType
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