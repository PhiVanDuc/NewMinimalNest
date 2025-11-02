import NavbarDrawer from "../NavbarDrawer";
import Navbar from "@/components/layouts/navbar/Navbar";
import NavbarUserClient from "@/components/layouts/navbar//user/NavbarUserClient";

import { userNavList } from "@/consts/navbar";

export default function NavbarUser() {
    // Fetch data nếu cần

    return (
        <>
            <Navbar>
                <NavbarUserClient />
            </Navbar>

            <NavbarDrawer
                variant="user"
                navList={userNavList}
            />
        </>
    )
}
