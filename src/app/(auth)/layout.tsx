import Navbar from "@/components/layouts/user/Navbar";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <main className="w-full h-dvh grid place-items-center container-horizontal container-top container-bottom overflow-y-auto">
            <Navbar />
            {children}
        </main>
    )
}
