import { Suspense } from "react";
import Header from "@/components/Header";
import ResetPasswordForm from "@/app/(auth)/reset-password/ResetPasswordForm";

export default function Page() {
    return (
        <div className="space-y-[50px] w-full max-w-[450px]">
            <Header isBreadcrumb={false}>
                <h1 className="header-basic">Đặt lại mật khẩu</h1>
                <p className="desc-basic">Vui lòng nhập mật khẩu mới của bạn tại đây.</p>
            </Header>

            <Suspense fallback="">
                <ResetPasswordForm />
            </Suspense>
        </div>
    )
}