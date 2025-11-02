import NavbarUser from "@/components/layouts/navbar/user/NavbarUser";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <main className="container-horizontal container-top container-bottom">
            <NavbarUser />
            {children}
        </main>
    )
}