"use client"

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { toast } from "@pheralb/toast";
import { resetPassword } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import resetPasswordSchema from "@/schema/reset-password-schema";

interface FormDataType {
    password: string,
    confirmPassword: string,
    token: string
}

export default function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            token: searchParams.get("token") || ""
        }
    });

    const mutation = useMutation({
        mutationFn: (data: FormDataType) => resetPassword(data),
        onSuccess: ({ success, message }) => {
            if (success) {
                toast.success({ text: "Thành công", description: message });
                router.push("/sign-in");
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            console.error("useMutation");
            console.error(error);
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSubmit = (data: FormDataType) => {
        if (!data.token) return;
        mutation.mutate(data);
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-[20px]"
            >
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>

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

                <Button
                    className="w-full bg-theme-main hover:bg-theme-main"
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? "Đang đặt lại mật khẩu . . ." : "Đặt lại mật khẩu"}
                </Button>
            </form>
        </Form>
    )
}
