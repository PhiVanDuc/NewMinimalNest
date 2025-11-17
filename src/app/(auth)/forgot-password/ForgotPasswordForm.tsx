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
import { Button } from "@/components/ui/button";
import { RiSendPlaneFill } from "react-icons/ri";

import { zodResolver } from "@hookform/resolvers/zod";
import forgotPasswordSchema from "@/schema/forgot-password-schema";

export default function ForgotPasswordForm() {
    const form = useForm({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
            otp: "",
            password: "",
            confirmPassword: ""
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
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-zinc-700">OTP</FormLabel>

                                <div className="flex items-stretch gap-[5px]">
                                    <FormControl>
                                        <Input
                                            placeholder="Nhập mã OTP . . ."
                                            {...field}
                                        />
                                    </FormControl>

                                    <Button
                                        type="button"
                                        className="self-stretch h-full bg-zinc-800 hover:bg-zinc-800/95 cursor-pointer"
                                    >
                                        <RiSendPlaneFill className="text-[20px]" />
                                    </Button>
                                </div>

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

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-zinc-700">Xác nhận mật khẩu</FormLabel>

                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Nhập lại mật khẩu . . ."
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

                <Button className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95">Đặt lại mật khẩu</Button>
            </form>
        </Form>
    )
}