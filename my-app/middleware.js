import { NextResponse } from "next/server";

export const middleware = (req) => {
  // Check if the application is running in a web view
  //   const isInWebView = req.headers["user-agent"].includes("WebView");

  //   if (isInWebView) {
  //     req.isInWebView = true;
  //   } else {
  //     req.isInWebView = false;
  //   }

  // Continue to the next middleware or route handler
  const url = new URL(req.nextUrl, "http://localhost");

  if (
    req.nextUrl.pathname === "/" &&
    !req.nextUrl.toString().includes("hideToolbar")
  ) {
    url.searchParams.set("hideToolbar", "true");
    return NextResponse.redirect(url);
  }

  if (
    req.nextUrl.pathname === "/about" &&
    !req.nextUrl.toString().includes("hideToolbar")
  ) {
    url.searchParams.set("hideToolbar", "false");
    return NextResponse.redirect(url);
  }

  if (
    req.nextUrl.pathname === "/booking" &&
    !req.nextUrl.toString().includes("hideToolbar")
  ) {
    url.searchParams.set("hideToolbar", "true");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};
