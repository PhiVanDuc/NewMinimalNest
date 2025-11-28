"use client"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import type { UseFormReturn, FieldValues, Path } from "react-hook-form";

interface PropsType<FormDataType extends FieldValues> {
    form: UseFormReturn<FormDataType>;
    name: Path<FormDataType>;
}

export default function InputColor<FormDataType extends FieldValues>({ form, name }: PropsType<FormDataType>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <FormItem className="shrink-0 relative self-stretch">
                        <FormLabel
                            className="block w-[60px] h-full rounded-[10px] outline-[2px] outline-offset-[2px] outline-zinc-200 cursor-pointer"
                            style={{
                                backgroundColor: form.watch(name)
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