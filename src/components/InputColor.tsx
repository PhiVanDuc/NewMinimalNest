"use client"

import {
    FormItem,
    FormLabel,
    FormControl
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

interface Props {
    colorCode: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputColor({ colorCode, onChange }: Props) {
    return (
        <FormItem className="shrink-0 relative self-stretch">
            <FormLabel
                className="block w-[60px] h-full rounded-[10px] outline-[2px] outline-offset-[2px] outline-zinc-200 cursor-pointer"
                style={{ background: colorCode }}
            />

            <FormControl className="absolute right-[-10px] top-0">
                <Input
                    type="color"
                    value={colorCode}
                    className="size-0 p-0 border-none"
                    onChange={onChange}
                />
            </FormControl>
        </FormItem>
    );
}