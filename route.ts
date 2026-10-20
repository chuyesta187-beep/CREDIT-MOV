import { NextResponse } from "next/server";

// This route intentionally does not guess a provider's API format.
// Add the chosen provider's documented endpoint after obtaining an API key.
export async function GET() {
  const apiKey = process.env.FOOTBALL_API_KEY;
  const baseUrl = process.env.FOOTBALL_API_BASE_URL;

  if (!apiKey || !baseUrl) {
    return NextResponse.json(
      {
        configured: false,
        message: "Configura un proveedor de datos de fútbol en las variables de entorno.",
        matches: [],
      },
      { status: 200 }
    );
  }

  return NextResponse.json({
    configured: true,
    message: "Proveedor configurado. Falta conectar aquí el endpoint y el formato documentados por el proveedor elegido.",
    matches: [],
  });
}
