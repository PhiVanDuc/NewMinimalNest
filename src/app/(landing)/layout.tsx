import NavbarUser from "@/components/layouts/navbar/user/NavbarUser";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <main>
            <NavbarUser />
            {children}
        </main>
    )
}
