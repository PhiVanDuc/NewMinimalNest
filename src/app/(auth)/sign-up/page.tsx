import Header from "@/components/Header";
import SignUpForm from "@/app/(auth)/sign-up/SignUpForm";

export default function Page() {
    return (
        <div className="w-full max-w-[450px] space-y-[50px]">
            <Header isBreadcrumb={false}>
                <h1 className="header-basic">Đăng ký</h1>
                <p className="desc-basic">Chào mừng bạn! Hãy tạo tài khoản để bắt đầu.</p>
            </Header>

            <SignUpForm />
        </div>
    )
}
