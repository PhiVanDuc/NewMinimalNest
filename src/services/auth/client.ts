"use client"

import { signOut } from "@/services/auth/server";
import { getRefreshToken } from "@/services/cookies";

export const refresh = async () => {
    try {
        const refreshToken = await getRefreshToken();
        const response = await fetch(
            "/api/auth/refresh",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken }),
                cache: "no-cache"
            }
        );

        const result = await response.json();
        if (!result.success) await signOut();

        return result;
    }
    catch (err) {
        const error = err as Error;

        console.log("Service Auth Client - 500 /api/auth/refresh -- Lỗi không xác định!");
        console.log(error.message);

        return {
            sucess: false,
            message: "Lỗi không xác định!"
        }
    }
}