"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface PropsType {
    form: UseFormReturn<{
        name: string,
        hex: string
    }>;
}

export default function InputColor({ form }: PropsType) {
    return (
        <FormField
            control={form.control}
            name="hex"
            render={({ field }) => {
                return (
                    <FormItem className="relative self-stretch">
                        <FormLabel
                            className="block w-[60px] h-full rounded-[10px] outline-[2px] outline-offset-[2px] outline-zinc-200 cursor-pointer"
                            style={{
                                backgroundColor: form.watch("hex")
                            }}
                        />

                        <FormControl className="absolute right-[-10px] top-0">
                            <Input
                                type="color"
                                {...field}
                                className="size-0 p-0 border-none"
                            />
                        </FormControl>
                    </FormItem>
                )
            }}
        />
    );
}