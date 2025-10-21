"use client"

import { useForm } from "react-hook-form";
import Link from "next/link";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { RiSendPlaneFill } from "react-icons/ri";

export default function ForgotPasswordForm() {
    const form = useForm({
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
                                        className="py-[22px]"
                                    />
                                </FormControl>
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
                                            className="py-[22px]"
                                        />
                                    </FormControl>

                                    <Button
                                        type="button"
                                        className="self-stretch h-full bg-zinc-800 hover:bg-zinc-800/95 cursor-pointer"
                                    >
                                        <RiSendPlaneFill className="text-[20px]" />
                                    </Button>
                                </div>
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
                                        className="py-[22px]"
                                    />
                                </FormControl>
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