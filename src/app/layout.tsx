import type { Metadata } from "next";
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
  title: "Portal Académico ITPR",
  description:
    "Misión, visión, normativa institucional, cursos modulares y anuales, inscripciones virtuales y certificados verificables del Instituto Tecnológico Productivo Regional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-neutral-100">
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-12 sm:px-6 md:py-16 space-y-12">
            {children}
          </main>
          <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} Instituto Tecnológico Productivo Regional. Todos los
                derechos reservados.
              </p>
              <p>Actualizado automáticamente con normativa MINEDU y SINEACE.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
