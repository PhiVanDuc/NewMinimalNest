import Link from "next/link";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";

import { PiSignInBold } from "react-icons/pi";

interface Props {
    searchParams: Promise<{ message: string }>
}

export default async function Page({ searchParams }: Props) {
    const parseSearchParams = await searchParams;
    const message = parseSearchParams.message;

    return (
        <div className="space-y-[30px]">
            <Header isBreadcrumb={false}>
                <h1 className="header-basic">Google</h1>
                <p className="desc-basic">{message || "Đăng nhập bằng google thất bại!"}</p>
            </Header>

            <Button className="bg-theme-main hover:bg-theme-main/95" asChild>
                <Link href="/sign-in">
                    Đăng nhập
                    <PiSignInBold />
                </Link>
            </Button>
        </div>
    )
}