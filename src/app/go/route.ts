import { NextResponse } from "next/server";

const PRIMARY_LINK = "https://ravaff.vip/ref/F714EE23";

export function GET() {
  return NextResponse.redirect(PRIMARY_LINK, { status: 307 });
}
