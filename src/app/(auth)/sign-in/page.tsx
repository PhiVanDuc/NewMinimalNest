import Header from "@/components/Header";
import SignInForm from "@/app/(auth)/sign-in/SignInForm";

export default function Page() {
    return (
        <div className="w-full max-w-[450px] space-y-[50px]">
            <Header isBreadcrumb={false}>
                <h1 className="header-basic">Đăng nhập</h1>
                <p className="desc-basic">Chào mừng bạn quay lại! Hãy đăng nhập để tiếp tục.</p>
            </Header>

            <SignInForm />
        </div>
    )
}