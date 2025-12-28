"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import publicFetch from "@/libs/fetch/public-fetch";
import providersConst from "@/consts/providers-const";
import tokenTypesConst from "@/consts/token-types-const";

export const signUp = async <DataType>(data: DataType) => {
    return publicFetch.post<DataType & { provider: string }>(
        "/auth/sign-up",
        {
            ...data,
            provider: providersConst.CREDENTIALS
        }
    );
}

export const verificationEmail = async <DataType>(data: DataType) => {
    return publicFetch.post<DataType & { tokenType: string }>(
        "/auth/email/send",
        {
            ...data,
            tokenType: tokenTypesConst.VERIFY_EMAIL
        }
    );
}

export const resetPasswordEmail = async <DataType>(data: DataType) => {
    return publicFetch.post<DataType & { tokenType: string }>(
        "/auth/email/send",
        {
            ...data,
            tokenType: tokenTypesConst.RESET_PASSWORD
        }
    );
}

export const resetPassword = async <DataType>(data: DataType) => {
    return publicFetch.post(
        "/auth/password/reset",
        data
    );
}

export const signOut = async () => {
    const parseCookies = await cookies();
    parseCookies.delete("access-token");
    parseCookies.delete("refresh-token");

    redirect("/sign-in");
}