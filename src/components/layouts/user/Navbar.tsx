import NavbarMobile from "@/components/layouts/user/NavbarMobile";
import NavbarDesktop from "@/components/layouts/user/NavbarDesktop";
import NavbarDrawer from "@/components/layouts/user/NavbarDrawer";

export default function Navbar() {
    // Fetch data nếu cần

    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
            <NavbarDrawer />
        </>
    )
}