import NavbarAdmin from "@/components/layouts/navbar/admin/NavbarAdmin";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <main className="admin-container-horizontal container-top container-bottom">
            <NavbarAdmin />
            {children}
        </main>
    )
}