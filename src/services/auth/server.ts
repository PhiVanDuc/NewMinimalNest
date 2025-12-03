"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import publicFetch from "@/libs/fetch/public-fetch";

export const signUp = async <DataType>(data: DataType) => {
    return await publicFetch.post<DataType & { type: string }>("/auth/sign-up", { ...data, type: "credentials" });
}

export const signOut = async () => {
    const parseCookies = await cookies();
    parseCookies.delete("access-token");
    parseCookies.delete("refresh-token");

    redirect("/sign-in");
}