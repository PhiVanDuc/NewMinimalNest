import { NextResponse, NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(request: NextRequest) {
    const { cookies, nextUrl } = request;

    const { pathname } = nextUrl;
    const accessToken = cookies.get('access-token')?.value;
    const refreshToken = cookies.get('refresh-token')?.value;

    NextResponse.next();
}

export const config = {
    matcher: [
        "/sign-in", "/sign-up", "/verification-email", "/verify-email", "/forgot-password", "/reset-password", "/google-sign-in/:path*",
        "/profile/:path*", "/cart", "/payment/:path*", "/return-request/:path*",
        "/admin/:path*"
    ]
}