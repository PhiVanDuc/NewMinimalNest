"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

interface Props {
    token: string
}

export default function FetchGoogleExchange({ token }: Props) {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async (token: string) => {
            const response = await fetch(
                "/api/auth/google/exchange",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token })
                }
            );

            return await response.json();
        },
        onSuccess: ({ success, message }) => {
            if (success) router.replace("/");
            else {
                const params = new URLSearchParams({ message });
                router.replace(`/google-sign-in/failed?${params.toString()}`);
            }
        },
        onError: (error) => {
            console.error("useMutation");
            console.error(error);
            router.replace(`/google-sign-in/failed`);
        }
    });

    useEffect(() => {
        mutation.mutate(token);
    }, [token]);

    return <></>
}