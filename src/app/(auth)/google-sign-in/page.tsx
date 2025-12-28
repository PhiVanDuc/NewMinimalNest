import { redirect } from "next/navigation";
import FetchGoogleExchange from "@/app/(auth)/google-sign-in/FetchGoogleExchange";

interface PropsType {
    searchParams: Promise<{ token: string }>
}

export default async function Page({ searchParams }: PropsType) {
    const { token } = await searchParams;
    if (!token) redirect("/google-sign-in/failed");

    return <FetchGoogleExchange token={token} />
}