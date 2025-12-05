"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import publicFetch from "@/libs/fetch/public-fetch";

export const signUp = async <DataType>(data: DataType) => {
    return await publicFetch.post<DataType & { provider: string }>(
        "/auth/sign-up",
        {
            ...data,
            provider: "credentials"
        }
    );
}

export const verificationEmail = async <DataType>(data: DataType) => {
    return await publicFetch.post<DataType & { tokenType: string, emailTemplate: string }>(
        "/auth/send-auth-email",
        {
            ...data,
            tokenType: "verify-email",
            emailTemplate: "verification-email"
        }
    );
}

export const signOut = async () => {
    const parseCookies = await cookies();
    parseCookies.delete("access-token");
    parseCookies.delete("refresh-token");

    redirect("/sign-in");
}