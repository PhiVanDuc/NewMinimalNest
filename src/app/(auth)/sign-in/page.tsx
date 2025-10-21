import SignInForm from "@/app/(auth)/sign-in/SignInForm";

export default function Page() {
    return (
        <section className="w-full max-w-[450px] space-y-[50px]">
            <header className="space-y-[2px]">
                <h1 className="header-basic">Đăng nhập</h1>
                <p className="desc-basic">Chào mừng bạn quay lại! Hãy đăng nhập để tiếp tục.</p>
            </header>

            <SignInForm />
        </section>
    )
}