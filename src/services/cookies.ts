"use server"

import { cookies } from "next/headers";

export const getAccessToken = async () => {
    const parseCookies = await cookies();
    return parseCookies.get("access-token");
}

export const getRefreshToken = async () => {
    const parseCookies = await cookies();
    return parseCookies.get("refresh-token");
}