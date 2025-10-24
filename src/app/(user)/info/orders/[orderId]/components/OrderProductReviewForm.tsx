"use client"

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import OrderProduct from "@/components/OrderProduct";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";

import { FaStar } from "react-icons/fa6";

import { v7 } from "uuid";
import { cn } from "@/lib/utils";

export default function OrderProductReviewForm() {
    const form = useForm({
        defaultValues: {
            id: v7(),
            rate: 0,
            comment: ""
        }
    });

    const rateWatch = form.watch("rate");

    const handleSubmit = () => { }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-[20px]"
            >
                <OrderProduct className="p-0 hover:bg-transparent cursor-auto" />

                <div className="p-[15px] rounded-[10px] border border-zinc-200 space-y-[20px]">
                    <div className="space-y-[8px]">
                        <label className="inline-block text-[14px] font-medium text-zinc-700">Đánh giá</label>

                        <div className="flex items-center gap-[8px]">
                            <ul className='flex items-center gap-[5px] text-[18px] text-amber-500'>
                                {
                                    [1, 2, 3, 4, 5].map((star) => {
                                        return (
                                            <li key={star}>
                                                <FaStar
                                                    onClick={() => form.setValue("rate", star)}
                                                    className={cn(
                                                        "transition-colors cursor-pointer",
                                                        star <= rateWatch ? "text-amber-500" : "text-zinc-300"
                                                    )}
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <p className="text-[15px] text-zinc-600 font-medium leading-tight">({rateWatch} sao)</p>
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel className="text-zinc-700">Nhận xét</FormLabel>

                                    <FormControl>
                                        <Textarea
                                            placeholder="Nhập nhận xét"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <Button className="w-full bg-theme-main hover:bg-theme-main/95">Nhận xét</Button>
                </div>
            </form>
        </Form>
    )
}
