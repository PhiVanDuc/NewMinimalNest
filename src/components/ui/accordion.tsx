"use client"

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils"

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("space-y-[10px]", className)}
            {...props}
        />
    )
}

function AccordionTrigger(
    {
        className,
        iconClassName,
        iconSize,
        children,
        ...props
    }: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
        iconClassName?: string
        iconSize?: number
    }
) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex flex-1 items-center justify-between px-[15px] py-[12px] w-full rounded-[10px] text-sm font-medium transition-all cursor-pointer [&[data-state=open]]:text-white [&[data-state=open]]:bg-theme-main [&[data-state=open]>svg]:rotate-90",
                    className
                )}
                {...props}
            >
                {children}

                <ChevronRight
                    className={cn(
                        "h-[18px] w-[18px] shrink-0 transition-transform duration-200",
                        iconClassName,
                        iconSize
                    )}
                />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn("pl-[20px]", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
