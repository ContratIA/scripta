import { NextRequest, NextResponse } from "next/server"

const TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!
const BASE = `https://api.telegram.org/bot${TOKEN}`

const SITES = [
  { name: "ScriptaSEO",        url: "https://scriptaseo.com" },
  { name: "Narclyze",          url: "https://narclyze.com" },
  { name: "NarcTracker",       url: "https://narctracker.vercel.app" },
  { name: "AffiliateWriterAI", url: "https://affiliatewriterai.com" },
  { name: "ComparaPaneles",    url: "https://comparapaneles.com" },
  { name: "ZonaBricolaje",     url: "https://zonabricolaje.com" },
]

async function send(text: string) {
  await fetch(`${BASE}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML", disable_web_page_preview: true }),
  })
}

async function checkSite(url: string): Promise<string> {
  try {
    const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(5000) })
    return res.ok ? "✅" : `⚠️ ${res.status}`
  } catch {
    return "❌"
  }
}

async function handleCommand(cmd: string) {
  switch (cmd) {
    case "/start":
      await send(
        `<b>Hola Eloy 👋</b>\n\n` +
        `Soy tu agente de portfolio. Gestiono:\n` +
        `• 6 sites en Vercel\n` +
        `• Pipeline nightly Scripta (10 prospectos/noche)\n` +
        `• Notificaciones automáticas a las 2am Madrid\n\n` +
        `Usa /help para ver todos los comandos.`
      )
      break

    case "/help":
      await send(
        `<b>Comandos disponibles:</b>\n\n` +
        `/start — Bienvenida\n` +
        `/status — Ping a los 6 sites en tiempo real\n` +
        `/sites — Lista del portfolio con links\n` +
        `/run — Lanzar pipeline nightly ahora\n` +
        `/report — Info del último ciclo\n` +
        `/help — Esta ayuda`
      )
      break

    case "/sites": {
      const list = SITES.map(s => `• <a href="${s.url}">${s.name}</a>`).join("\n")
      await send(`<b>Portfolio (6 sites):</b>\n\n${list}`)
      break
    }

    case "/status": {
      await send("🔍 Verificando los 6 sites...")
      const checks = await Promise.all(
        SITES.map(async s => {
          const icon = await checkSite(s.url)
          return `${icon} <a href="${s.url}">${s.name}</a>`
        })
      )
      const now = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })
      await send(`<b>Estado del portfolio:</b>\n\n${checks.join("\n")}\n\n<i>${now} (Madrid)</i>`)
      break
    }

    case "/run":
      await send(
        `🚀 <b>Lanzar pipeline ahora:</b>\n\n` +
        `Abre este enlace en el navegador:\n` +
        `https://claude.ai/code/routines\n\n` +
        `Busca <b>scripta-nightly</b> → pulsa <b>Run now</b>.\n\n` +
        `Recibirás el reporte aquí cuando termine (~5 min).`
      )
      break

    case "/report":
      await send(
        `<b>Pipeline nightly:</b>\n\n` +
        `• Horario: cada noche a las <b>2:00am Madrid</b>\n` +
        `• Generando: 10 prospectos + 10 borradores Gmail\n` +
        `• Último disparo: <a href="https://claude.ai/code/routines">ver en claude.ai/code/routines</a>\n\n` +
        `Revisa tu Gmail → Borradores para los emails de hoy.`
      )
      break

    default:
      await send(`Comando no reconocido: <code>${cmd}</code>\n\nUsa /help.`)
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const text: string = body?.message?.text?.trim() ?? ""
    if (text.startsWith("/")) {
      const cmd = text.split(" ")[0].toLowerCase()
      await handleCommand(cmd)
    }
  } catch {
    // silently ignore malformed updates
  }
  return NextResponse.json({ ok: true })
}

// Telegram requires 200 even on GET health checks
export async function GET() {
  return NextResponse.json({ ok: true, bot: "@Eloy55_Claude_bot" })
}
