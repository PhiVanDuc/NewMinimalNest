import NavbarUser from "@/components/layouts/navbar/user/NavbarUser";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <main className="container-horizontal container-top container-bottom">
            <NavbarUser />
            {children}
        </main>
    )
}