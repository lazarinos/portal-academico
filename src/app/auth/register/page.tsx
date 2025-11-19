"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/auth/sign-up/email", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setMessage(data?.error ?? "No se pudo registrar.");
    } else {
      setMessage("Cuenta creada. Redirigiendo...");
      window.location.href = "/";
    }
  }

  return (
    <Card className="w-full max-w-xl border-neutral-200">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <Badge variant="outline">Registro</Badge>
          <span>Crea tu cuenta</span>
        </div>
        <CardTitle className="text-2xl font-semibold">Registrarse</CardTitle>
        <p className="text-sm text-neutral-500">
          Asigna tu rol. Si seleccionas admin, deberás validar identidad con el equipo de
          TI para activar privilegios.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="correo@institucion.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Select value={role} onValueChange={setRole}>
            <SelectTrigger>
              <SelectValue placeholder="Rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creando..." : "Crear cuenta"}
          </Button>
          {message && <p className="text-sm text-rose-500">{message}</p>}
        </form>
        <p className="mt-4 text-sm text-neutral-600">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="font-semibold text-neutral-900 underline">
            Ingresa
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
