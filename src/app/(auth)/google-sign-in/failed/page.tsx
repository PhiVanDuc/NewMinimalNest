import { Button } from "@/components/ui/button";
import Link from "next/link";

import { PiSignInBold } from "react-icons/pi";

interface PropsType {
    searchParams: Promise<{ message: string }>
}

export default async function Page({ searchParams }: PropsType) {
    const parseSearchParams = await searchParams;
    const message = parseSearchParams.message;

    return (
        <div className="space-y-[30px]">
            <header className="space-y-[2px]">
                <h1 className="header-basic">Google</h1>
                <p className="desc-basic">{message || "Đăng nhập bằng google thất bại!"}</p>
            </header>

            <Button className="bg-theme-main hover:bg-theme-main/95" asChild>
                <Link href="/sign-in">
                    Đăng nhập
                    <PiSignInBold />
                </Link>
            </Button>
        </div>
    )
}