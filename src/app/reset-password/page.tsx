"use client"

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

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
import { resetPassword } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import resetPasswordSchema from "@/schema/reset-password-schema";

interface FormDataType {
    password: string,
    confirmPassword: string,
    token: string
}

export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const form = useForm<FormDataType>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            token: searchParams.get("token") || ""
        }
    });

    const mutation = useMutation({
        mutationFn: (data: FormDataType) => resetPassword(data),
        onSuccess: (result) => {
            const { success, message } = result;

            if (success) {
                toast.success({ text: "Thành công", description: message });
                router.push("/sign-in");
            }
            else toast.error({ text: "Thất bại", description: message });
        },
        onError: (error) => {
            toast.error({ text: "Thất bại", description: error.message });
        }
    });

    const handleSubmit = (data: FormDataType) => {
        if (!data.token) return;
        mutation.mutate(data);
    }

    return (
        <div className="h-dvh flex flex-col items-center justify-center">
            <div className="space-y-[50px] w-full max-w-[450px]">
                <header className="space-y-[2px]">
                    <h1 className="header-basic">Đặt lại mật khẩu</h1>
                    <p className="desc-basic">Vui lòng nhập mật khẩu mới của bạn tại đây.</p>
                </header>

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
            </div>
        </div>
    )
}