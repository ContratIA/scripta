const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/
const VALID_PLANS = new Set(["starter", "growth", "scale", "unsure"])
const CHECKOUT_PLANS = new Set(["starter", "growth", "scale"])

export function isValidEmail(val: unknown): val is string {
  return typeof val === "string" && val.length <= 254 && EMAIL_RE.test(val)
}

export function isValidPlan(val: unknown): val is string {
  return typeof val === "string" && VALID_PLANS.has(val)
}

export function isValidCheckoutPlan(val: unknown): val is string {
  return typeof val === "string" && CHECKOUT_PLANS.has(val)
}

export function sanitize(val: unknown, maxLen = 200): string {
  if (typeof val !== "string") return ""
  return val.slice(0, maxLen).replace(/[<>"'`]/g, "")
}

export function parseBody(raw: unknown): Record<string, unknown> {
  if (raw !== null && typeof raw === "object" && !Array.isArray(raw)) {
    return raw as Record<string, unknown>
  }
  return {}
}
