"use client"

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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";

import { zodResolver } from "@hookform/resolvers/zod";
import signInSchema from "@/schema/sign-in-schema";

export default function SignInForm() {
    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleSignIn = () => { }

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
                                        className="py-[22px]"
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
                                        className="py-[22px]"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <div className="flex justify-end">
                    <Link
                        href="/forgot-password"
                        className="inline-block text-[14px] text-theme-main font-medium underline underline-offset-2 leading-tight"
                    >
                        Quên mật khẩu
                    </Link>
                </div>

                <Button className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95">Đăng nhập</Button>

                <div className="relative">
                    <Separator className="absolute top-1/2 -translat-y-1/2" />

                    <div className="flex justify-center">
                        <p className="relative px-[10px] bg-white text-center text-[13px] text-zinc-400 font-medium">Đăng nhập với</p>
                    </div>
                </div>

                <div className="space-y-[10px]">
                    <button className="flex items-center justify-center gap-[15px] rounded-[10px] px-[15px] py-[12px] bg-zinc-100 w-full cursor-pointer">
                        <FcGoogle className="text-[26px]" />
                        <span className="text-[15px] font-medium text-zinc-700">Google</span>
                    </button>

                    <p className="text-center desc-basic">Bạn chưa có tài khoản? <Link href="/sign-up" className="text-theme-main font-medium underline underline-offset-2">Đăng ký</Link></p>
                </div>
            </form>
        </Form>
    )
}
