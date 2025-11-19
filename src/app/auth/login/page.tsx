"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/auth/sign-in/email", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setMessage(data?.error ?? "No se pudo iniciar sesión.");
    } else {
      setMessage("Ingreso correcto");
      window.location.href = "/";
    }
  }

  return (
    <Card className="w-full max-w-xl border-neutral-200">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Badge variant="outline">Acceso</Badge>
          <span>Ingresa con tu cuenta</span>
        </div>
        <CardTitle className="text-2xl font-semibold">Iniciar sesión</CardTitle>
        <p className="text-sm text-neutral-500">
          Autenticación segura con Better Auth. Las cookies están protegidas y solo
          se envían al dominio del portal.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="correo@institucion.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </Button>
          {message && <p className="text-sm text-rose-500">{message}</p>}
        </form>
        <p className="mt-4 text-sm text-neutral-600">
          ¿No tienes cuenta?{" "}
          <Link href="/auth/register" className="font-semibold text-neutral-900 underline">
            Registrarte
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
