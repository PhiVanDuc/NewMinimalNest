import NavbarAdmin from "@/components/layouts/navbar/admin/NavbarAdmin";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<PropsType>) {
    return (
        <main className="admin-container-horizontal container-top container-bottom">
            <NavbarAdmin />
            {children}
        </main>
    )
}