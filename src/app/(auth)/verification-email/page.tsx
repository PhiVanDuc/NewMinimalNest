import VerificationEmailForm from "@/app/(auth)/verification-email/VerificationEmailForm";

export default function Page() {
    return (
        <div className="w-full max-w-[450px] space-y-[50px]">
            <header className="space-y-[2px]">
                <h1 className="header-basic">Email xác minh</h1>
                <p className="desc-basic">Vui lòng nhập email bạn cần xác minh.</p>
            </header>

            <VerificationEmailForm />
        </div>
    )
}
