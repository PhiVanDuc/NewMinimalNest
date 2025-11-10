import Navbar from "@/components/layouts/navbar/Navbar";
import NavbarAdminClient from "@/components/layouts/navbar/admin/NavbarAdminClient";
import NavbarDrawer from "../NavbarDrawer";

import { adminDrawerNavList } from "@/consts/navbar";

export default function NavbarAdmin() {
    return (
        <>
            <Navbar
                className="bg-zinc-900"
                isScroll={false}
            >
                <NavbarAdminClient />
            </Navbar>

            <NavbarDrawer drawerNavList={adminDrawerNavList} />
        </>
    )
}