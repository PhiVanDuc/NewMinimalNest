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

import { zodResolver } from "@hookform/resolvers/zod";
import infoGeneralSchema from "@/schema/info-general-schema";

export default function InfoGeneralForm() {
    const form = useForm({
        resolver: zodResolver(infoGeneralSchema),
        defaultValues: {
            username: "",
            email: ""
        }
    });

    const handleSubmit = () => { }

    return (
        <div className="space-y-[25px]">
            <Header isBreadcrumb={false}>
                <h1 className="sub-header-basic">Thông tin chung</h1>
                <p className="desc-basic">Cập nhật thông tin chung của bạn. Tên người dùng có thể thay đổi, nhưng email sẽ được giữ cố định.</p>
            </Header>

            <Form {...form}>
                <form
                    autoComplete="off"
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Tên người dùng</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Tên người dùng . . ."
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
                                    <FormLabel>Email</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Email . . ."
                                            className="py-[22px]"
                                            disabled={true}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <div className="flex justify-end">
                        <Button className="bg-theme-main hover:bg-theme-main/95">Cập nhật</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
