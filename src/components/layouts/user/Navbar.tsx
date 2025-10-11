"use client"

import { useSelector } from "react-redux";

import NavbarMobile from "@/components/layouts/user/NavbarMobile";
import NavbarDesktop from "@/components/layouts/user/NavbarDesktop";
import NavbarMobileSidebar from "@/components/layouts/user/NavbarMobileSidebar";

import type { ReduxStateType } from "@/store/store";

export default function Navbar() {
    const isOpen = useSelector((state: ReduxStateType) => state.navbarSidebar.isOpen);

    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
            <NavbarMobileSidebar />
        </>
    )
}