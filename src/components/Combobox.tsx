"use client"

import { useState } from "react";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList
} from "@/components/ui/command";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { LuChevronsUpDown } from "react-icons/lu";

import { cn } from "@/lib/utils";

type OptionItem = {
    label: string,
    value: string
}

interface PropsType {
    className?: string,
    buttonPlaceholder?: string,
    searchPlaceholder?: string,
    emptyPlaceholder?: string,
    optionList: OptionItem[],
    value?: string,
    onChange?: (value: string) => void,
    disabled?: boolean
}

export default function Combobox({
    className,
    buttonPlaceholder,
    emptyPlaceholder,
    optionList,
    value: propValue,
    onChange,
    disabled
}: PropsType) {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const value = propValue || internalValue;

    const handleSelect = (currentValue: string) => {
        const nextValue = currentValue === value ? "" : currentValue

        if (onChange) onChange(nextValue)
        else setInternalValue(nextValue)

        setOpen(false)
    }

    return (
        <Popover
            open={open}
            onOpenChange={setOpen}
        >
            <PopoverTrigger
                disabled={disabled}
                asChild
            >
                <Button
                    className={cn(
                        "gap-[25px] py-[20px] bg-white hover:bg-white border border-input text-[14px] text-muted-foreground font-normal",
                        className
                    )}
                >
                    {
                        value
                            ? optionList.find(optionItem => optionItem.value === value)?.label
                            : buttonPlaceholder || "Lựa chọn thông tin"
                    }

                    <LuChevronsUpDown />
                </Button>
            </PopoverTrigger>

            <PopoverContent
                className="w-[250px]"
                align="start"
            >
                <Command>
                    <CommandList>
                        <CommandEmpty>{emptyPlaceholder || "Danh sách lựa chọn rỗng."}</CommandEmpty>

                        {
                            optionList.length > 0
                            && (
                                <CommandGroup>
                                    {
                                        optionList.map((optionItem, index) => {
                                            return (
                                                <CommandItem
                                                    key={`${optionItem.value}.${index}`}
                                                    value={optionItem.value}
                                                    onSelect={handleSelect}
                                                >
                                                    {optionItem.label}
                                                </CommandItem>
                                            )
                                        })
                                    }
                                </CommandGroup>
                            )
                        }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}