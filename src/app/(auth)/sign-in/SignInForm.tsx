"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

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
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

import { toast } from "@pheralb/toast";
import signInSchema from "@/schema/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormDataType {
    email: string,
    password: string
}

export default function SignInForm() {
    const [isPending, setIsPending] = useState(false);

    const form = useForm<FormDataType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "phivanduc325@gmail.com",
            password: "123456"
        }
    });

    const handleSignIn = async (data: FormDataType) => {
        try {
            setIsPending(true);

            const response = await fetch(
                "/api/auth/sign-in",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    cache: "no-cache"
                }
            );

            const { success, message } = await response.json();
            if (success) toast.success({ text: "Thành công", description: message });
            else toast.error({ text: "Thất bại", description: message });
        }
        catch (err) {
            const error = err as Error;

            console.log("Fetch -- Đăng nhập -- Lỗi không xác định!");
            console.log(error.message);

            toast.error({ text: "Thất bại", description: error.message });
        }
        finally { setIsPending(false); }
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                className="space-y-[20px]"
                onSubmit={form.handleSubmit(handleSignIn)}
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

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-zinc-700">Mật khẩu</FormLabel>

                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Nhập mật khẩu . . ."
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex justify-between">
                    <Link
                        href="/verification-email"
                        className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight"
                    >
                        Email xác minh
                    </Link>

                    <Link
                        href="/forgot-password"
                        className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight"
                    >
                        Quên mật khẩu
                    </Link>
                </div>

                <Button
                    className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95"
                    disabled={isPending}
                >
                    {isPending ? "Đang đăng nhập . . ." : "Đăng nhập"}
                </Button>

                <div className="relative py-[10px]">
                    <Separator className="absolute top-1/2 -translat-y-1/2" />

                    <div className="flex justify-center">
                        <p className="relative px-[10px] bg-white text-center text-[13px] text-zinc-400 font-medium">Đăng nhập với</p>
                    </div>
                </div>

                <div className="space-y-[15px]">
                    <button className="flex items-center justify-center gap-[15px] rounded-[10px] px-[15px] py-[12px] bg-zinc-100 w-full cursor-pointer">
                        <FcGoogle className="text-[26px]" />
                        <span className="text-[15px] font-medium text-zinc-700">Google</span>
                    </button>

                    <p className="text-center desc-basic">Bạn chưa có tài khoản? <Link href="/sign-up" className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight">Đăng ký</Link></p>
                </div>
            </form>
        </Form>
    )
}