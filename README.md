# Personal Portfolio

Dieses Projekt nutzt **Vite + React** (statt CRA).

## Setup

```bash
npm install
```

## Lokal starten

### PROD-Variante

```bash
npm run dev:prod
```

### BETA-Variante

```bash
npm run dev:beta
```

Standard-Shortcut:

```bash
npm start
```

(`npm start` startet `dev:prod`)

## Build

### Standard-Build (aktuell aktive `index.html`)

```bash
npm run build
```

### Explizit PROD

```bash
npm run build:prod
```

### Explizit BETA

```bash
npm run build:beta
```

Build-Output liegt in `build/`.

## Environment Variables

Vite nutzt `VITE_*` Variablen:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_USER_ID`

Zugriff im Code über `import.meta.env`.
