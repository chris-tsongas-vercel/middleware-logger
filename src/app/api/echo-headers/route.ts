// app/api/echo-headers/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Convert headers to a plain object for easier reading in JSON response
  const headers = Object.fromEntries(request.headers.entries());

  return NextResponse.json({ headers });
}
