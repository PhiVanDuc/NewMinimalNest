"use client"

import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { FiCalendar } from "react-icons/fi";

import formatDate from "@/utils/format-date";

import type { Matcher } from "react-day-picker";

interface Props {
    value: Date;
    onSelect?: (date: Date | undefined) => void;
    isError?: boolean,
    disabled?: Matcher | Matcher[];
}

export default function DatePicker({
    value,
    onSelect,
    isError,
    disabled
}: Props) {
    return (
        <Popover>
            <PopoverTrigger className="w-full">
                <div className="relative">
                    <Input
                        value={formatDate(value)}
                        className="cursor-pointer"
                        readOnly
                    />

                    <FiCalendar className="text-[20px] text-zinc-500 absolute right-[12px] top-1/2 -translate-y-1/2" />
                </div>
            </PopoverTrigger>

            <PopoverContent className="w-fit">
                <Calendar
                    mode="single"
                    selected={value}
                    captionLayout="dropdown"
                    fromYear={1990}
                    toYear={new Date().getFullYear() + 10}
                    onSelect={(date) => { if (onSelect) onSelect(date); }}
                    className="w-fit"
                    disabled={disabled}
                />
            </PopoverContent>
        </Popover>
    )
}