import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req: NextRequest, ev: any) {
    const { pathname } = req.nextUrl
    if (pathname.startsWith('/watch')) {
        console.log(req.nextUrl)
        console.log(ev)
        const splitPath = pathname.split("/");
        const redirect = '/anime/' + splitPath[2];
        return splitPath.length < 4 ? NextResponse.redirect(new URL(redirect, req.url)) : NextResponse.next();
    }
    return NextResponse.next()
}
export const config = {
    matcher: ['/watch/:path*'],
}