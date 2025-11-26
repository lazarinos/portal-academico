"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CourseProgram, coursePrograms } from "@/data/site-content";

export function CourseShowcase() {
  const modular = coursePrograms.filter((course) => course.modality === "Modular");
  const annual = coursePrograms.filter((course) => course.modality === "Anual");
  const [selectedCourse, setSelectedCourse] = useState<CourseProgram | null>(null);

  return (
    <section id="cursos" className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Oferta academica
          </p>
          <h2 className="text-3xl font-semibold">Cursos modulares y anuales</h2>
          <p className="text-neutral-600">
            Selecciona un programa para ver su descripcion, perfiles de desempeno y
            detalles de costo, duracion e inicio. Pagos habilitados con PagoEfectivo
            (Yape/Plin) y Visa.
          </p>
        </div>
        <Badge variant="outline" className="text-xs uppercase tracking-widest">
          Matricula virtual habilitada
        </Badge>
      </div>

      <Tabs defaultValue="modular" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="modular">Modulares</TabsTrigger>
          <TabsTrigger value="anual">Anuales</TabsTrigger>
        </TabsList>
        <TabsContent value="modular">
          <CourseTable data={modular} onSelect={setSelectedCourse} />
        </TabsContent>
        <TabsContent value="anual">
          <CourseTable data={annual} onSelect={setSelectedCourse} />
        </TabsContent>
      </Tabs>

      {selectedCourse ? (
        <CourseDialog course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      ) : null}
    </section>
  );
}

type TableProps = {
  data: CourseProgram[];
  onSelect: (course: CourseProgram) => void;
};

function CourseTable({ data, onSelect }: TableProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border">
      <Table>
        <TableHeader>
          <TableRow className="bg-neutral-50 text-neutral-500">
            <TableHead>Programa</TableHead>
            <TableHead>Duracion</TableHead>
            <TableHead>Costo inscripcion</TableHead>
            <TableHead>Inicio</TableHead>
            <TableHead>Certificacion</TableHead>
            <TableHead>Cupos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((course) => (
            <TableRow
              key={course.name}
              className="cursor-pointer transition hover:bg-neutral-50"
              onClick={() => onSelect(course)}
            >
              <TableCell>
                <div className="font-semibold text-neutral-900">
                  {course.name}
                </div>
                <p className="text-sm text-neutral-500">{course.schedule}</p>
              </TableCell>
              <TableCell>{course.duration}</TableCell>
              <TableCell>{course.cost}</TableCell>
              <TableCell>{course.start}</TableCell>
              <TableCell>{course.certification}</TableCell>
              <TableCell>
                <Badge variant="secondary">{course.seats} vacantes</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

type DialogProps = {
  course: CourseProgram;
  onClose: () => void;
};

function CourseDialog({ course, onClose }: DialogProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={16} />
        </button>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            {course.modality}
          </p>
          <h3 className="text-2xl font-semibold text-neutral-900">{course.name}</h3>
          <p className="text-neutral-600">{course.summary}</p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Detail label="Duracion" value={course.duration} />
          <Detail label="Costo" value={course.cost} />
          <Detail label="Cupos" value={`${course.seats} vacantes`} />
          <Detail label="Inicio" value={course.start} />
          <Detail label="Certificacion" value={course.certification} />
          <Detail label="Horario" value={course.schedule} />
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-neutral-900">
            Quien puede desempenarse
          </p>
          <ul className="mt-2 space-y-2 text-sm text-neutral-600">
            {course.roles.map((role) => (
              <li key={role} className="flex gap-2">
                <span className="text-neutral-400">•</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-xl border bg-neutral-50 p-4 text-sm text-neutral-700">
          <p>
            Modalidad {course.modality.toLowerCase()} • Horario {course.schedule} •
            Inicio {course.start}
          </p>
          <p className="text-neutral-500">
            PagoEfectivo (Yape/Plin) y Visa disponibles al confirmar la inscripcion.
          </p>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-neutral-50 p-3">
      <p className="text-xs uppercase tracking-wide text-neutral-500">{label}</p>
      <p className="text-sm font-semibold text-neutral-900">{value}</p>
    </div>
  );
}
