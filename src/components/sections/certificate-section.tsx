"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const baseCertificate = {
  student: "Ana Paredes",
  program: "Emergencias y Cuidados Prehospitalarios",
  issueDate: "10 mayo 2024",
  code: "ITPR-CPH-24-00125",
};

export function CertificateSection() {
  const [code, setCode] = useState("");
  const [certificate, setCertificate] = useState(baseCertificate);

  function handleGenerate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!code.trim()) return;
    setCertificate({
      ...certificate,
      student: "Consulta personalizada",
      code: code.toUpperCase(),
    });
  }

  return (
    <section
      id="certificados"
      className="grid gap-6 rounded-3xl border bg-white p-8 lg:grid-cols-2"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Certificados verificables
        </p>
        <h2 className="text-3xl font-semibold">
          Descarga y valida tu certificado con código QR
        </h2>
        <p className="text-neutral-600">
          Ingresando tu código o DNI el sistema genera un PDF firmado con QR
          institucional. El QR redirige al repositorio oficial y muestra la
          veracidad del documento.
        </p>
        <form
          onSubmit={handleGenerate}
          className="flex flex-col gap-3 rounded-2xl border bg-neutral-50 p-4"
        >
          <label className="text-sm font-semibold text-neutral-700">
            Código de certificado o DNI
          </label>
          <Input
            placeholder="Ej. ITPR-CPH-24-00125"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <Button type="submit" className="self-start">
            Generar certificado
          </Button>
        </form>
        <p className="text-sm text-neutral-500">
          Integrado con SUNEDU y RENIEC. Si encuentras una inconsistencia,
          repórtala usando mesa de partes digital.
        </p>
      </div>

      <Card className="border-neutral-200">
        <CardHeader>
          <CardTitle className="text-2xl">Certificado digital</CardTitle>
          <p className="text-sm text-neutral-500">
            Documento expedido por la Dirección Académica. Firma oficial y código QR
            verificable.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-2xl border bg-neutral-50 p-4">
            <p className="text-sm text-neutral-500">Estudiante</p>
            <p className="text-xl font-semibold">{certificate.student}</p>
            <p className="text-sm text-neutral-500">{certificate.program}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-neutral-50 p-4">
              <p className="text-sm text-neutral-500">Emitido</p>
              <p className="font-semibold">{certificate.issueDate}</p>
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-4">
              <p className="text-sm text-neutral-500">Código</p>
              <p className="font-semibold">{certificate.code}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-2xl border bg-neutral-900/80 p-4 text-center text-white">
            <Badge className="bg-emerald-400 text-emerald-950">Es verídico</Badge>
            <QRCode
              value={`https://portal.itpr.edu.pe/certificados/${certificate.code}`}
              className="h-32 w-32 rounded bg-white p-2"
            />
            <p className="text-xs text-white/70">
              Escanea para validar en el repositorio oficial.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
