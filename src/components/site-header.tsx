"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";

const navItems = [
  { href: "/mision", label: "Identidad" },
  { href: "/cursos", label: "Programas" },
  { href: "/inscripciones", label: "Inscripciones" },
  { href: "/documentos", label: "Normativa" },
  { href: "/certificados", label: "Certificados" },
  { href: "/evaluaciones", label: "Evaluaciones" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-900 text-white">
            I
          </span>
          Portal Académico
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-neutral-900/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <UserAvatar />
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Ingresar</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Crear cuenta</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 ring-1 ring-neutral-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-100 bg-white/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <UserAvatar />
            <Button asChild className="w-full">
              <Link href="/auth/login">Ingresar</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
