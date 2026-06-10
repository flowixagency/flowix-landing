import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowix — Gestión inteligente para tu negocio",
  description: "Flowix es el sistema de gestión todo-en-uno para barberías, peluquerías, estéticas, spas y más. Agenda, caja, reportes y más desde tu PC.",
  keywords: ["sistema de gestion", "barberia", "peluqueria", "estetica", "spa", "software gestion"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: "#050508", fontFamily: "'Outfit', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
