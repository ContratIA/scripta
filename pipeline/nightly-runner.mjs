/**
 * NIGHTLY RUNNER — se ejecuta cada noche automáticamente
 * 1. Genera contenido para clientes activos
 * 2. Busca nuevos prospects
 * 3. Envía emails de seguimiento
 * 4. Genera reporte de métricas
 */
import { execSync } from "child_process"
import { writeFileSync } from "fs"
import { join } from "path"

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`)

async function run(script) {
  try {
    log(`Running: ${script}`)
    execSync(`node ${script}`, { stdio: "inherit", cwd: import.meta.dirname })
    log(`✓ Done: ${script}`)
  } catch (e) {
    log(`✗ Failed: ${script} — ${e.message}`)
  }
}

async function main() {
  log("=== NIGHTLY RUNNER STARTED ===")
  
  // 1. Produce content for active clients
  await run("content-producer.mjs")
  
  // 2. Find new prospects (50/night = 350/week)
  await run("find-prospects.mjs")
  
  // 3. Generate personalized emails for new prospects
  await run("cold-email-generator.mjs")
  
  // 4. Write daily report
  const report = {
    date: new Date().toISOString(),
    status: "completed",
    nextRun: new Date(Date.now() + 24*60*60*1000).toISOString(),
  }
  writeFileSync(join(import.meta.dirname, "last-run.json"), JSON.stringify(report, null, 2))
  
  log("=== NIGHTLY RUNNER COMPLETE ===")
}

main()
