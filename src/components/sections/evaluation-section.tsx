"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { evaluationBlueprints } from "@/data/site-content";

const practiceQuestion = {
  statement:
    "Identifica el orden correcto de las etapas para activar un protocolo de bioseguridad al ingresar al laboratorio.",
  options: [
    "Registro biométrico → Lavado clínico → Colocación de EPP → Check-list de equipos",
    "Lavado clínico → Registro biométrico → Check-list de equipos → Colocación de EPP",
    "Check-list de equipos → Lavado clínico → Registro biométrico → Colocación de EPP",
  ],
  answer: "Lavado clínico → Registro biométrico → Check-list de equipos → Colocación de EPP",
};

export function EvaluationSection() {
  const [selected, setSelected] = useState<string>();
  const [result, setResult] = useState<null | boolean>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    setResult(selected === practiceQuestion.answer);
  }

  return (
    <section
      id="evaluaciones"
      className="grid gap-6 rounded-3xl border bg-neutral-900 p-8 text-white lg:grid-cols-[2fr_3fr]"
    >
      <div>
        <p className="text-sm uppercase tracking-wide text-white/60">
          Evaluaciones virtuales
        </p>
        <h2 className="text-3xl font-semibold">Rinde simulacros cuando quieras</h2>
        <p className="text-white/70">
          Bancos de preguntas alineados al currículo. Puedes practicar por competencias
          y recibir retroalimentación inmediata antes de rendir el examen oficial.
        </p>
        <div className="mt-6 space-y-4">
          {evaluationBlueprints.map((evaluation) => (
            <Card
              key={evaluation.title}
              className="border-white/15 bg-white/5 text-white"
            >
              <CardContent className="flex flex-col gap-3 p-5 text-sm">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold">{evaluation.title}</p>
                  <Badge className="bg-emerald-400 text-emerald-950">
                    {evaluation.time}
                  </Badge>
                </div>
                <p className="text-white/70">
                  {evaluation.questions} preguntas · {evaluation.competency}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  Programar intento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-white/20 bg-white/5 text-white">
        <CardHeader>
          <CardTitle>Pregunta de práctica</CardTitle>
          <p className="text-sm text-white/70">
            Responde y conoce al instante si estás alineado con el estándar.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-lg font-semibold">{practiceQuestion.statement}</p>
            <RadioGroup
              value={selected}
              onValueChange={(value) => {
                setSelected(value);
                setResult(null);
              }}
              className="space-y-3"
            >
              {practiceQuestion.options.map((option) => (
                <label
                  key={option}
                  className="flex w-full cursor-pointer items-start gap-3 rounded-2xl border border-white/30 bg-white/5 p-4 text-sm"
                >
                  <RadioGroupItem value={option} className="mt-1 border-white" />
                  <span>{option}</span>
                </label>
              ))}
            </RadioGroup>
            <Button type="submit" className="w-full bg-white text-neutral-900">
              Verificar respuesta
            </Button>
            {result !== null && (
              <p
                className={`rounded-2xl p-4 text-sm ${
                  result
                    ? "bg-emerald-400/20 text-emerald-100"
                    : "bg-rose-400/20 text-rose-100"
                }`}
              >
                {result
                  ? "¡Correcto! Continua al siguiente módulo."
                  : "Respuesta incorrecta. Revisa la secuencia de ingreso seguro."}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
