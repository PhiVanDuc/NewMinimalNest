import NavbarUser from "@/components/layouts/navbar/user/NavbarUser";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <main className="w-full h-dvh grid place-items-center container-horizontal container-top container-bottom overflow-y-auto">
            <NavbarUser />
            {children}
        </main>
    )
}
