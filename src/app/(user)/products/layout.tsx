import Filter from "@/app/(user)/products/components/Filter";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <>
            <Filter />
            {children}
        </>
    )
}