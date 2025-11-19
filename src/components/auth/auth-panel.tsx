"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type SessionUser = {
  name?: string;
  email?: string;
  role?: string;
};

type SessionResponse = {
  user?: SessionUser | null;
};

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function AuthPanel() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [session, setSession] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isAdmin = useMemo(() => session?.role === "admin", [session]);

  useEffect(() => {
    let active = true;
    (async () => {
      const data = await fetchJson<SessionResponse>("/api/auth/get-session");
      if (active) {
        const user = data?.user ?? data?.data?.user ?? null;
        setSession(user ?? null);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const path = mode === "login" ? "/api/auth/sign-in/email" : "/api/auth/sign-up/email";
    const payload =
      mode === "login"
        ? { email, password }
        : { email, password, name, role };
    const res = await fetch(path, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("OK");
      const next = await fetchJson<SessionResponse>("/api/auth/get-session");
      const user = next?.user ?? next?.data?.user ?? null;
      setSession(user ?? null);
    } else {
      setMessage(data?.error || "No se pudo procesar la solicitud.");
    }
    setLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/auth/sign-out", { method: "POST", credentials: "include" });
    setSession(null);
  }

  return (
    <Card className="border-neutral-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Acceso
          {isAdmin && <Badge className="bg-neutral-900 text-white">Admin</Badge>}
        </CardTitle>
        <p className="text-sm text-neutral-500">
          Estudiantes pueden registrarse; administradores gestionan portada y avisos.
        </p>
      </CardHeader>
      <CardContent>
        {session ? (
          <div className="space-y-3 text-sm text-neutral-700">
            <p>
              Sesión: <span className="font-semibold">{session.email}</span> ({session.role ?? "student"})
            </p>
            <Button variant="outline" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Button
                type="button"
                variant={mode === "login" ? "default" : "outline"}
                onClick={() => setMode("login")}
              >
                Ingresar
              </Button>
              <Button
                type="button"
                variant={mode === "register" ? "default" : "outline"}
                onClick={() => setMode("register")}
              >
                Registrarse
              </Button>
            </div>
            {mode === "register" && (
              <Input placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} required />
            )}
            <Input
              placeholder="correo@dominio.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {mode === "register" && (
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            )}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Procesando..." : mode === "login" ? "Ingresar" : "Crear cuenta"}
            </Button>
            {message && <p className="text-sm text-rose-500">{message}</p>}
          </form>
        )}
      </CardContent>
    </Card>
  );
}
