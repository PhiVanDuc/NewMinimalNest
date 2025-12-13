import Link from "next/link";
import { Button } from "@/components/ui/button";

import { PiSignInBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocationArrow } from "react-icons/ti";

import publicFetch from "@/libs/fetch/public-fetch";

interface PropsType {
    searchParams: Promise<{ token: string }>
}

export default async function Page({ searchParams }: PropsType) {
    const parseSearchParams = await searchParams;
    let isSuccess = true;

    try {
        const { success } = await publicFetch.post("/auth/email/verify", { token: parseSearchParams.token });
        isSuccess = success;
    }
    catch (err) { isSuccess = false; }

    return (
        <div className="h-dvh flex flex-col items-center justify-center p-[20px]">
            <div className="space-y-[30px]">
                <div className="space-y-[2px]">
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
                </div>

                <div className="flex gap-[5px]">
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

                    <Button asChild>
                        <Link href="/">
                            Trang chủ
                            <TiLocationArrow className="translate-y-[-0.5px]" />
                        </Link>
                    </Button>
                </div >
            </div >
        </div >
    )
}