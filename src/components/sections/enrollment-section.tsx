"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { coursePrograms } from "@/data/site-content";

const programs = coursePrograms.map((course) => course.name);

export function EnrollmentSection() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!program) {
      setError("Selecciona un programa para continuar.");
      return;
    }
    setError(null);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section
      id="inscripciones"
      className="grid gap-6 rounded-3xl border bg-neutral-900 p-8 text-white lg:grid-cols-[3fr_2fr]"
    >
      <div>
        <p className="text-sm uppercase tracking-wide text-white/60">
          Inscripciones virtuales
        </p>
        <h2 className="text-3xl font-semibold">Reserva tu vacante en línea</h2>
        <p className="mt-2 text-white/70">
          Completa el formulario, adjunta tus documentos en PDF y recibe tu constancia
          inmediata. Nuestro equipo valida los datos con RENIEC y SUNEDU para garantizar
          seguridad.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              Nombres y apellidos
              <Input
                required
                className="mt-2 bg-white/10 text-white placeholder:text-white/40"
                placeholder="María Campos"
              />
            </label>
            <label className="text-sm">
              DNI / CE
              <Input
                required
                className="mt-2 bg-white/10 text-white placeholder:text-white/40"
                placeholder="12345678"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              Correo electrónico
              <Input
                type="email"
                required
                className="mt-2 bg-white/10 text-white placeholder:text-white/40"
                placeholder="nombre@correo.com"
              />
            </label>
            <label className="text-sm">
              Teléfono
              <Input
                required
                className="mt-2 bg-white/10 text-white placeholder:text-white/40"
                placeholder="+51 900 000 000"
              />
            </label>
          </div>
          <label className="text-sm">
            Programa de interés
            <Select value={program} onValueChange={setProgram}>
              <SelectTrigger className="mt-2 bg-white/10 text-white">
                <SelectValue placeholder="Selecciona un programa" />
              </SelectTrigger>
              <SelectContent className="text-neutral-900">
                {programs.map((name) => (
                  <SelectItem key={name} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="text-sm">
            Mensaje / Documentos (URL)
            <Textarea
              className="mt-2 bg-white/10 text-white placeholder:text-white/40"
              placeholder="Coloca enlace a Drive o describe tu caso."
            />
          </label>
          <Button type="submit" className="w-full">
            Enviar inscripción
          </Button>
          {error && (
            <p className="text-sm text-rose-300">{error}</p>
          )}
          {submitted && (
            <p className="text-sm text-emerald-300">
              ¡Inscripción registrada! Revisa tu correo para firmar la autorización
              digital.
            </p>
          )}
        </form>
      </div>

      <Card className="border-white/20 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>Seguimiento en tiempo real</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-white/80">
          <p>El 100% del proceso se gestiona en línea.</p>
          <ul className="space-y-3">
            <li className="rounded-xl border border-white/15 bg-white/10 p-3">
              1. Validación automática de identidad y notas.
            </li>
            <li className="rounded-xl border border-white/15 bg-white/10 p-3">
              2. Envío de contrato digital y comprobante.
            </li>
            <li className="rounded-xl border border-white/15 bg-white/10 p-3">
              3. Asignación de usuario y acceso a campus.
            </li>
          </ul>
          <p className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-100">
            * Disponible pago en línea (Visa, Yape) o transferencia desde banca
            móvil.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
