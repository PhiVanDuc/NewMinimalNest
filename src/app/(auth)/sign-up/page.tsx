import SignUpForm from "@/app/(auth)/sign-up/SignUpForm";

export default function Page() {
    return (
        <section className="w-full max-w-[450px] space-y-[50px]">
            <header className="space-y-[2px]">
                <h1 className="header-basic">Đăng ký</h1>
                <p className="desc-basic">Chào mừng bạn! Hãy tạo tài khoản để bắt đầu.</p>
            </header>

            <SignUpForm />
        </section>
    )
}
