import InfoOption from "@/app/(user)/info/components/InfoOption";
import { cn } from "@/lib/utils";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <div
            className={cn(
                "relative flex flex-col gap-[40px]",
                "lg:items-start",
                "xl:flex-row"
            )}
        >
            <InfoOption />
            {children}
        </div>
    )
}