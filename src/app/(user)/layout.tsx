import Navbar from "@/components/layouts/user/Navbar";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <main className="container-horizontal container-top container-bottom">
            <Navbar />
            {children}
        </main>
    )
}