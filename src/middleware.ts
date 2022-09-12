// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import API from "./API";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (
    req.nextUrl.locale === "default" ||
    !(await API.locales()).some(({ id }) => req.nextUrl.locale === id)
  ) {
    const { defaultLocale } = await API.settings();

    const url = new URL(`/${defaultLocale}${req.nextUrl.pathname}`, req.url);
    return NextResponse.redirect(url);
  }
}
