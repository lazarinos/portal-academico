"use client";

import { useEffect, useMemo, useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { HeroContent } from "@/lib/hero";

type SessionUser = { role?: string; email?: string };

async function fetchSession(): Promise<SessionUser | null> {
  try {
    const res = await fetch("/api/auth/get-session", { credentials: "include" });
    const data = await res.json();
    const user = data?.user || data?.data?.user;
    return user ?? null;
  } catch (error) {
    console.error("No se pudo cargar la sesión", error);
    return null;
  }
}

async function fetchHero(): Promise<HeroContent | null> {
  try {
    const res = await fetch("/api/hero");
    const data = await res.json();
    return data?.data ?? null;
  } catch (error) {
    console.error("No se pudo cargar hero", error);
    return null;
  }
}

async function saveHero(content: HeroContent) {
  const res = await fetch("/api/hero", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data?.error || "No autorizado");
  }
}

export default function AdminHeroPage() {
  const [hero, setHero] = useState<HeroContent | null>(null);
  const [session, setSession] = useState<SessionUser | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const isAdmin = useMemo(() => session?.role === "admin", [session]);

  useEffect(() => {
    fetchSession().then(setSession);
    fetchHero().then((data) => data && setHero(data));
  }, []);

  if (!hero) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-12">
        <p className="text-neutral-600">Cargando héroe...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12">
      <HeroSection content={hero} />
      <Card className="border-neutral-200">
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Editar portada</CardTitle>
            <p className="text-sm text-neutral-500">
              Solo administradores pueden guardar cambios en la portada.
            </p>
          </div>
          {isAdmin ? (
            <Badge className="bg-neutral-900 text-white">Admin</Badge>
          ) : (
            <Badge variant="outline">Solo lectura</Badge>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          <Input
            value={hero.title}
            onChange={(e) => setHero({ ...hero, title: e.target.value })}
            placeholder="Título"
          />
          <Textarea
            value={hero.subtitle}
            onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
            placeholder="Subtítulo"
          />
          <Input
            value={hero.imageUrl}
            onChange={(e) => setHero({ ...hero, imageUrl: e.target.value })}
            placeholder="URL de imagen"
          />
          <div className="grid gap-2 sm:grid-cols-2">
            <Input
              value={hero.ctaLabel}
              onChange={(e) => setHero({ ...hero, ctaLabel: e.target.value })}
              placeholder="Texto del botón"
            />
            <Input
              value={hero.ctaTarget}
              onChange={(e) => setHero({ ...hero, ctaTarget: e.target.value })}
              placeholder="Destino del botón"
            />
          </div>
          <Button
            disabled={!isAdmin || saving}
            onClick={async () => {
              setSaving(true);
              setMessage("");
              try {
                await saveHero(hero);
                setMessage("Portada actualizada");
              } catch (error) {
                if (error instanceof Error) {
                  setMessage(error.message);
                } else {
                  setMessage("No autorizado");
                }
              } finally {
                setSaving(false);
              }
            }}
          >
            {saving ? "Guardando..." : "Guardar"}
          </Button>
          {message && <p className="text-sm text-neutral-600">{message}</p>}
          {!isAdmin && (
            <p className="text-sm text-rose-500">
              Inicia sesión como admin para editar. Usa /auth/login.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
