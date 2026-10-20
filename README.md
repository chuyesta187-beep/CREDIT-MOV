# GOALSPHERE

Starter de una web de fútbol mundial con Next.js, autenticación Google mediante Auth.js, favoritos en `localStorage` y sin base de datos propia.

## Requisitos
- Node.js 20.9 o posterior
- Credenciales OAuth de Google
- API/proveedor de datos futbolísticos (para marcadores reales)

## Instalar
1. Descomprime el ZIP.
2. En la carpeta del proyecto, ejecuta `npm install`.
3. Copia `.env.example` a `.env.local`.
4. Completa `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_SECRET` y `AUTH_URL`.
5. Ejecuta `npm run dev` y abre `http://localhost:3000`.

## Importante
- Los partidos de la página son ejemplos visuales; no son datos reales.
- La ruta `/api/football` está preparada como punto de integración, pero requiere elegir proveedor y adaptar el endpoint a su documentación.
- La autenticación usa sesiones JWT y no guarda usuarios en una base de datos propia.
- Los favoritos se guardan solo en el navegador (`localStorage`), por lo que no se sincronizan entre dispositivos.
- No subas `.env.local` ni claves secretas a GitHub.
- Revisa la documentación actual de Auth.js y el proveedor de fútbol antes de publicar.
