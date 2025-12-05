import ForgotPasswordForm from "@/app/(auth)/forgot-password/ForgotPasswordForm";

export default function Page() {
    return (
        <div className="w-full max-w-[450px] space-y-[50px]">
            <header className="space-y-[2px]">
                <h1 className="header-basic">Quên mật khẩu</h1>
                <p className="desc-basic">Vui lòng nhập email tài khoản của bạn.</p>
            </header>

            <ForgotPasswordForm />
        </div>
    )
}
