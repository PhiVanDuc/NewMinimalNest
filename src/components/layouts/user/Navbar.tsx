import NavbarMobile from "@/components/layouts/user/NavbarMobile";
import NavbarDesktop from "@/components/layouts/user/NavbarDesktop";
import NavbarMobileSidebar from "@/components/layouts/user/NavbarMobileSidebar";

export default function Navbar() {
    // Fetch data nếu cần

    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
            <NavbarMobileSidebar />
        </>
    )
}