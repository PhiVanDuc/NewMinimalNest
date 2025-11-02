import Navbar from "@/components/layouts/navbar/Navbar";
import NavbarDrawer from "@/components/layouts/navbar/NavbarDrawer";
import NavbarUserClient from "@/components/layouts/navbar/user/NavbarUserClient";

import { userDrawerNavList } from "@/consts/navbar";

export default function NavbarUser() {
    // Fetch data nếu cần

    return (
        <>
            <Navbar>
                <NavbarUserClient />
            </Navbar>

            <NavbarDrawer drawerNavList={userDrawerNavList} />
        </>
    )
}