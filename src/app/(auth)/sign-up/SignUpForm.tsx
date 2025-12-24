"use client"

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { toast } from "@pheralb/toast";
import { signUp } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "@/schema/sign-up-schema";

interface FormDataType {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export default function SignUpForm() {
    const form = useForm<FormDataType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "Phí Văn Đức",
            email: "phivanduc325@gmail.com",
            password: "123456",
            confirmPassword: "123456"
        }
    });

    const mutation = useMutation({
        mutationFn: (data: FormDataType) => signUp(data),
        onSuccess: ({ success, message }) => {
            if (success) toast.success({ text: "Thành công", description: message });
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                className="space-y-[20px]"
                onSubmit={form.handleSubmit(data => mutation.mutate(data))}
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

                <Button
                    className="w-full cursor-pointer bg-theme-main hover:bg-theme-main/95"
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? "Đang đăng ký . . ." : "Đăng ký"}
                </Button>
            </form>
        </Form>
    )
}