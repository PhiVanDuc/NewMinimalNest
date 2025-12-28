import { NextRequest, NextResponse } from "next/server";
import publicFetch from "@/libs/fetch/public-fetch";

interface RequestBodyType { refreshToken: string }
interface ResponseDataType extends RequestBodyType { accessToken: string }

const BE_API = process.env.BE_API;
const path = "/auth/tokens/refresh";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { status, success, message, data } = await publicFetch.post<RequestBodyType, ResponseDataType>(path, body);

        if (success && data) {
            const { accessToken, refreshToken } = data;

            const res = NextResponse.json(
                { success, message, data: { accessToken } },
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
        
        console.log(`Route Handlers - ${BE_API}${path}`);
        console.log(error);

        return NextResponse.json(
            { success: false, message: error.message || "Lỗi không xác định!" },
            { status: 500 }
        );
    }
}