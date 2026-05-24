# Scripta — AI Growth Agency

## Negocio
Servicio de SEO y contenido para SaaS companies, entregado 100% por IA.

**URL:** https://getscripta.vercel.app  
**Stack:** Next.js 16 + Vercel + Stripe + Resend  
**Pricing:** $997 Starter / $1,997 Growth / $3,497 Scale

## Objetivo de revenue
- Mes 1: 3 clientes beta = $2,991
- Mes 2: 8 clientes = $15,976  
- Mes 6: 30 clientes = $59,910
- Mes 12: 80 clientes = $159,760

## Tareas nocturnas (24/7)
- `pipeline/nightly-runner.mjs` — orquestador principal
- `pipeline/content-producer.mjs` — genera posts para clientes activos
- `pipeline/find-prospects.mjs` — busca 50 nuevos leads/noche
- `pipeline/cold-email-generator.mjs` — personaliza emails para prospects

## Setup pendiente
1. Crear cuenta Stripe → añadir keys en Vercel env vars
2. Crear productos en Stripe ($997, $1,997, $3,497/mo recurring)
3. Crear cuenta Resend → añadir key en Vercel env vars
4. Conectar dominio real (getscripta.com)
5. Configurar /schedule para nightly-runner

## Comandos clave
```bash
cd C:/Users/eloym/scripta
npm run dev          # desarrollo local
npx vercel --prod    # deploy a producción
node pipeline/nightly-runner.mjs  # test del runner
```

## Adquisición de clientes (semana 1)
1. Cold email a 50 SaaS founders/día (pipeline automatizado)
2. Post en LinkedIn sobre "AI vs human content" (yo lo escribo)
3. ProductHunt launch (yo preparo los assets)
4. Comentar en threads de IndieHackers sobre SEO
