import { NextRequest, NextResponse } from "next/server"

const BLOCKED = [
  /\/\.env/i,
  /\/\.git/i,
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/xmlrpc\.php/i,
  /\/phpMyAdmin/i,
  /\/admin\.php/i,
  /\/shell\.php/i,
  /\/etc\/passwd/i,
  /\/proc\//i,
  /\/boot\//i,
  /\.\.\//,
  /%2e%2e/i,
  /\x00/,
]

const MAX_BODY_BYTES = 50_000

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  for (const pattern of BLOCKED) {
    if (pattern.test(pathname)) {
      return new NextResponse(null, { status: 404 })
    }
  }

  // Stripe webhook needs raw body intact — skip size check
  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/webhooks/")) {
    const cl = req.headers.get("content-length")
    if (cl && parseInt(cl, 10) > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 })
    }
  }

  // Block requests with no or suspicious user agents hitting API
  // Whitelist: /api/webhooks/* (Stripe) and /api/telegram (Telegram bot)
  const isWhitelisted = pathname.startsWith("/api/webhooks/") || pathname === "/api/telegram"
  if (pathname.startsWith("/api/") && !isWhitelisted) {
    const ua = req.headers.get("user-agent") ?? ""
    if (!ua || ua.length > 512) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
