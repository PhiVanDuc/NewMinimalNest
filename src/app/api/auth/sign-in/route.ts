import { NextRequest, NextResponse } from "next/server";
import publicFetch from "@/libs/fetch/public-fetch";

interface InputData {
    email: string,
    password: string
}

interface OutputData {
    accessToken: string,
    refreshToken: string
}

const BE_API = process.env.BE_API;
const PATH = "/auth/sign-in";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { status, success, message, data } = await publicFetch.post<InputData, OutputData>(PATH, body);

        if (success && data) {
            const { accessToken, refreshToken } = data;

            const res = NextResponse.json(
                { success, message },
                { status }
            );

            res.cookies.set("access-token", accessToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60,
                path: "/"
            });

            res.cookies.set("refresh-token", refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60,
                path: "/"
            });

            return res;
        }

        return NextResponse.json(
            { success, message },
            { status }
        );
    }
    catch (err) {
        const error = err as Error;
        
        console.error(`Route Handlers - ${BE_API}${PATH}`);
        console.error(error);

        return NextResponse.json(
            { success: false, message: error.message || "Lỗi không xác định!" },
            { status: 500 }
        );
    }
}