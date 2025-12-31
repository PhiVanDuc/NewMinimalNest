"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

import { LuChevronsUpDown } from "react-icons/lu";

import { cn } from "@/libs/utils";

interface OptionItemType {
    label: string,
    value: string
}

interface PropsType {
    options: OptionItemType[],
    value: string,
    onSelect: (value: string) => void,
    disabled?: boolean,
    placeholder?: string,
    className?: string,
}

export default function Combobox({
    options,
    value,
    onSelect,
    disabled,
    placeholder,
    className
}: PropsType) {
    const [open, setOpen] = useState(false);
    const selectedOption = options.find((opt) => opt.value === value);

    const handleSelect = (value: string) => {
        onSelect(value);
        setOpen(false);
    };

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
                        "gap-[20px] py-[22px] bg-white hover:bg-white border border-input text-[14px] text-muted-foreground font-normal",
                        className
                    )}
                >
                    {selectedOption?.label || placeholder || "Lựa chọn"}
                    <LuChevronsUpDown />
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <Command>
                    <CommandList>
                        <CommandEmpty>Danh sách lựa chọn rỗng.</CommandEmpty>

                        {
                            options.length > 0
                            && (
                                <CommandGroup>
                                    {
                                        options.map((opiton, index) => {
                                            const isFirst = index === 0;
                                            const isSelected = opiton.value === value;

                                            return (
                                                <CommandItem
                                                    key={opiton.value}
                                                    value={opiton.value}
                                                    onSelect={handleSelect}
                                                    className={cn(
                                                        isFirst ? "mt-0" : "mt-[5px]",
                                                        isSelected ? "bg-accent text-accent-foreground" : ""
                                                    )}
                                                >
                                                    {opiton.label}
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