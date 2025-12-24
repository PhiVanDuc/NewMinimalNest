"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

interface PropsType {
    token: string
}

export default function FetchExchangeGoogle({ token }: PropsType) {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (token: string) => {
            const response = await fetch(
                "/api/auth/google/exchange",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token }),
                    cache: "no-cache"
                }
            );

            const { success, message } = await response.json();
            return { success, message };
        },
        onSuccess: ({ success, message }) => {
            if (success) router.replace("/");
            else {
                const params = new URLSearchParams();
                params.set("message", message);
                router.replace(`/google-sign-in/failed?${params.toString()}`);
            }
        },
        onError: (error) => {
            console.log(error);
            router.replace(`/google-sign-in/failed`)
        }
    });

    useEffect(() => {
        mutation.mutate(token);
    }, [token]);

    return <></>
}