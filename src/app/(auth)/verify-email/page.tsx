import Link from "next/link";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";

import { PiSignInBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

import publicFetch from "@/libs/fetch/public-fetch";

interface Props {
    searchParams: Promise<{ token: string }>
}

export default async function Page({ searchParams }: Props) {
    const parseSearchParams = await searchParams;
    let isSuccess = true;

    try {
        const { success } = await publicFetch.post("/auth/email/verify", { token: parseSearchParams.token });
        isSuccess = success;
    }
    catch (error) {
        console.log(error);
        isSuccess = false;
    }

    return (
        <div className="space-y-[30px]">
            <Header isBreadcrumb={false}>
                <h1 className="header-basic">
                    {
                        isSuccess ?
                            "Xác minh email thành công!" :
                            "Opps!"
                    }
                </h1>

                <p className="desc-basic">
                    {
                        isSuccess ?
                            "Email của bạn đã được xác minh. Bạn có thể đăng nhập để bắt đầu sử dụng dịch vụ." :
                            "Liên kết xác minh email không hợp lệ hoặc đã hết hạn."
                    }
                </p>
            </Header>

            {
                isSuccess ?
                    (
                        <Button className="bg-theme-main hover:bg-theme-main/95" asChild>
                            <Link href="/sign-in">
                                Đăng nhập
                                <PiSignInBold />
                            </Link>
                        </Button>
                    ) :
                    (
                        <Button className="bg-theme-main hover:bg-theme-main/95" asChild>
                            <Link href="/verification-email">
                                Email xác minh
                                <MdOutlineEmail />
                            </Link>
                        </Button>
                    )
            }
        </div>
    )
}