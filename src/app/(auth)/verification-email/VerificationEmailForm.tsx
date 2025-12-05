"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Link from "next/link";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "@pheralb/toast";
import { verificationEmail } from "@/services/auth";
import resendEmailSchema from "@/schema/resend-email-schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormData {
    email: string
}

export default function VerificationEmailForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(resendEmailSchema),
        defaultValues: {
            email: "phivanduc325@gmail.com"
        }
    });

    const mutation = useMutation({
        mutationFn: (data: FormData) => verificationEmail(data),
        onSuccess: (result) => {
            const { success, message } = result;

            if (success) toast.success({ text: "Thành công", description: message });
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.log("Tanstack Query Mutation -- Email xác minh -- ", error.message);
            toast.error({ text: "Thất bại", description: error.message });
        }
    })

    const handleSubmit = (data: FormData) => {
        mutation.mutate(data);
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                className="space-y-[20px]"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-zinc-700">Email</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập email . . ."
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex justify-end">
                    <Link
                        href="/sign-in"
                        className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight"
                    >
                        Đăng nhập
                    </Link>
                </div>

                <Button
                    className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95"
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? "Đang gửi email . . ." : "Gửi email"}
                </Button>
            </form>
        </Form>
    )
}
