"use client"

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { FcGoogle } from "react-icons/fc";

import { toast } from "@pheralb/toast";
import signInSchema from "@/schema/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormDataType {
    email: string,
    password: string
}

export default function SignInForm() {
    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "phivanduc325@gmail.com",
            password: "123456"
        }
    });
    
    const mutation = useMutation({
        mutationFn: async (data: FormDataType) => {
            const response = await fetch(
                "/api/auth/sign-in",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                }
            );

            const { success, message } = await response.json();
            return { success, message };
        },
        onSuccess: ({ success, message }) => {
            if (success) toast.success({ text: "Thành công", description: message });
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.error("useMutation");
            console.error(error);
            toast.error({ text: "Thất bại", description: error.message });
        }
    })

    const handleSignIn = async (data: FormDataType) => mutation.mutate(data);
    const handleSignInGoogle = () => window.location.href = `${process.env.NEXT_PUBLIC_BE_API}/auth/google`;

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
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? "Đang đăng nhập . . ." : "Đăng nhập"}
                </Button>

                <div className="relative py-[10px]">
                    <Separator className="absolute top-1/2 -translat-y-1/2" />

                    <div className="flex justify-center">
                        <p className="relative px-[10px] bg-white text-center text-[13px] text-zinc-400 font-medium">Đăng nhập với</p>
                    </div>
                </div>

                <div className="space-y-[15px]">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-[15px] rounded-[10px] px-[15px] py-[12px] bg-zinc-100 w-full cursor-pointer"
                        onClick={handleSignInGoogle}
                    >
                        <FcGoogle className="text-[26px]" />
                        <span className="text-[15px] font-medium text-zinc-700">Google</span>
                    </button>

                    <p className="text-center desc-basic">Bạn chưa có tài khoản? <Link href="/sign-up" className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight">Đăng ký</Link></p>
                </div>
            </form>
        </Form>
    )
}