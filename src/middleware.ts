import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Log details from the request object
  console.log("Request Method:", request.method);
  console.log("Request URL:", request.url);
  console.log("User Agent:", request.headers.get("user-agent"));

  // Retrieve the IP address from headers
  const ip = request.headers.get("x-forwarded-for") || "IP not available";
  console.log("IP Address:", ip);

  // Log cookies from the request
  const cookies = request.cookies;
  console.log("Request Cookies:", cookies);

  // Add a custom header or cookie in the response if needed
  const response = NextResponse.next();

  // Example: Set a cookie in the response
  response.cookies.set("custom-cookie", "cookie-value", {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 1 day in seconds
  });

  // Log details from the response object, including any cookies set
  console.log("Response Status:", response.status);
  console.log("Response Cookies:", response.cookies.getAll());
  console.log("Response Headers:", Array.from(response.headers.entries()));

  return response;
}

// Specify routes or patterns for this middleware if needed
export const config = {
  matcher: "/api/:path*", // This runs middleware only on /api routes
};
