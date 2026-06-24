# WBGT — Hitte op het Werk Check

Bereken of de wettelijke actiewaarden voor hitte op het werk zijn overschreden, conform de Belgische Welzijnswetgeving.

## Features

- **WBGT-index berekening** op basis van temperatuur en luchtvochtigheid
- **Wettelijke limieten** per type fysieke werkbelasting (licht, middelzwaar, zwaar, zeer zwaar)
- **Werk-rust advies** — aanbevolen verhouding bij overschrijding
- **Uursvoorspelling** — staafdiagram met hitteverloop vandaag
- **Locatie zoeken** — stad/gemeente of GPS
- **Recente controles** — laatste 5 berekeningen (localStorage)
- **Visuele gauge** — schaal van 12 tot 34 WBGT
- **Drietraps status** — veilig / opgelet / actiewaarde overschreden
- **Meertalig** — Nederlands, Engels, Frans
- **PWA** — installeerbaar als app, offline ondersteuning
- **Responsive** — mobiel en desktop

## Live

https://wbgt.corebase.be

## Deployment

```bash
docker compose up -d
```

Gebruikt Caddy voor automatische HTTPS via Let's Encrypt.

## Berekening

WBGT = 0.7 × Twet + 0.3 × Tdry

Gebaseerd op de tabel op p. 17 van de FOD-brochure, geldig in afwezigheid van directe zonnestraling of stralingswarmte van machines.

Weerdata via [Open-Meteo](https://open-meteo.com/).
