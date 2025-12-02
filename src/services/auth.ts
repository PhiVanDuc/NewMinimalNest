"use server"

import publicFetch from "@/libs/fetch/public-fetch";

interface SignInResponseDataType {
    id: string,
    username: string,
    email: string,
    type: string,
    rank: string,
    is_verified: boolean,
    created_at: Date,
    updated_at: Date
}

export const signUp = async <DataType>(data: DataType) => {
    return publicFetch.post<DataType, SignInResponseDataType>("/auth/sign-up", { ...data, type: "credentials" });
}