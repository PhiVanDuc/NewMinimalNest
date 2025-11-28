"use client"

import { useState, useMemo } from "react";

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

interface OptionItemType {
    label: string,
    value: string
}

interface PropsType {
    className?: string,
    buttonPlaceholder?: string,
    searchPlaceholder?: string,
    emptyPlaceholder?: string,
    options: OptionItemType[],
    option?: string,
    onSelect?: (option: string) => void,
    disabled?: boolean
}

export default function Combobox({
    className,
    buttonPlaceholder,
    emptyPlaceholder,
    options,
    option: propOption,
    onSelect,
    disabled
}: PropsType) {
    const [open, setOpen] = useState(false);
    const [internalOption, setInternalOption] = useState("");

    const option = propOption || internalOption;

    const selectedOption = useMemo(
        () => options.find(optionItem => optionItem.value === option),
        [options, option]
    );

    const handleSelect = (currentOption: string) => {
        const next = currentOption === option ? "" : currentOption;
        onSelect ? onSelect(next) : setInternalOption(next);
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
                        "gap-[25px] py-[22px] bg-white hover:bg-white border border-input text-[14px] text-muted-foreground font-normal",
                        className
                    )}
                >
                    {selectedOption?.label || buttonPlaceholder || "Lựa chọn thông tin"}
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
                            options.length > 0
                            && (
                                <CommandGroup>
                                    {
                                        options.map((optionItem, index) => {
                                            const isActive = optionItem.value === option;
                                            const isFirst = index === 0;

                                            return (
                                                <CommandItem
                                                    key={optionItem.value}
                                                    value={optionItem.value}
                                                    onSelect={handleSelect}
                                                    className={cn(
                                                        isFirst ? "mt-0" : "mt-[5px]",
                                                        isActive ? "bg-accent text-accent-foreground" : ""
                                                    )}
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