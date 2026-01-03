"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import publicFetch from "@/libs/fetch/public-fetch";

import PROVIDERS from "@/consts/providers";
import TOKEN_TYPES from "@/consts/token-types";

type SignUpInputData<Data> = Data & { provider: string };
type VerificationEmailInputData<Data> = Data & { tokenType: string };
type ResetPasswordEmailInputData<Data> = Data & { tokenType: string };

export const signUp = async <Data>(data: Data) => {
    return publicFetch.post<SignUpInputData<Data>>(
        "/auth/sign-up",
        {
            ...data,
            provider: PROVIDERS.credentials.value
        }
    );
}

export const verificationEmail = async <Data>(data: Data) => {
    return publicFetch.post<VerificationEmailInputData<Data>>(
        "/auth/email/send",
        {
            ...data,
            tokenType: TOKEN_TYPES.VERIFY_EMAIL
        }
    );
}

export const resetPasswordEmail = async <Data>(data: Data) => {
    return publicFetch.post<ResetPasswordEmailInputData<Data>>(
        "/auth/email/send",
        {
            ...data,
            tokenType: TOKEN_TYPES.RESET_PASSWORD
        }
    );
}

export const resetPassword = async <Data>(data: Data) => {
    return publicFetch.post("/auth/password/reset", data);
}

export const signOut = async () => {
    const parseCookies = await cookies();
    parseCookies.delete("access-token");
    parseCookies.delete("refresh-token");

    redirect("/sign-in");
}