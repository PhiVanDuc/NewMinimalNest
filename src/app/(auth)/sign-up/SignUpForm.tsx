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

import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "@/schema/sign-up-schema";

export default function SignUpForm() {
    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: "",
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
                    name="username"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel className="text-zinc-700">Tên người dùng</FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Nhập tên người dùng . . ."
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

                <Button className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95">Đăng ký</Button>
            </form>
        </Form>
    )
}
