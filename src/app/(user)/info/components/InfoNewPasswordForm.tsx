"use client"

import { useForm } from "react-hook-form";

import Header from "@/components/Header";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { IoReloadOutline } from "react-icons/io5";

import { zodResolver } from "@hookform/resolvers/zod";
import { infoNewPassword } from "@/schema/info-general-schema";

export default function InfoNewPasswordForm() {
    const form = useForm({
        resolver: zodResolver(infoNewPassword),
        defaultValues: {
            newPassword: "",
            confirmPassword: ""
        }
    });

    const handleSubmit = () => { }

    return (
        <div className="space-y-[25px]">
            <Header isBreadcrumb={false}>
                <h2 className="sub-header-basic">Mật khẩu</h2>
                <p className="desc-basic">Cập nhật mật khẩu để giữ an toàn cho tài khoản của bạn.</p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Mật khẩu mới</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            placeholder="Nhập mật khẩu mới . . ."
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
                                    <FormLabel>Xác nhận mật khẩu</FormLabel>

                                    <FormControl>
                                        <Input
                                            type="password"
                                            {...field}
                                            placeholder="Nhập lại mật khẩu . . ."
                                            className="py-[22px]"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end">
                        <Button className="bg-theme-main hover:bg-theme-main/95">
                            <IoReloadOutline />
                            Thay đổi mật khẩu
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
