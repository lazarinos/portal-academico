import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Academico ITPR",
  description:
    "Mision, vision, normativa institucional, cursos modulares y anuales, inscripciones virtuales y certificados verificables del Instituto Tecnologico Productivo Regional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-neutral-100">
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col space-y-10 px-4 py-10 sm:px-6 md:py-12">
            {children}
          </main>
          <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
              <p>
                (c) {new Date().getFullYear()} Instituto Tecnologico Productivo Regional. Todos los
                derechos reservados.
              </p>
              <p>Actualizado automaticamente con normativa MINEDU y SINEACE.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
