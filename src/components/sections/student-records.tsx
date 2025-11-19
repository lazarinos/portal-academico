import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { gradeRecords } from "@/data/site-content";

const statusColors: Record<string, string> = {
  Destacado: "bg-emerald-500 text-emerald-950",
  Regular: "bg-amber-500/20 text-amber-900",
  Observado: "bg-rose-500/20 text-rose-900",
};

export function StudentRecords() {
  return (
    <section
      id="notas"
      className="rounded-3xl border bg-gradient-to-br from-white to-slate-50 p-8"
    >
      <div className="mb-6">
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Seguimiento académico
        </p>
        <h2 className="text-3xl font-semibold">Notas y progreso</h2>
        <p className="text-neutral-600">
          Visualización en tiempo real del promedio, estado y avance curricular. Datos
          sincronizados con el Sistema Integrado de Evaluación.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border">
        <Table>
          <TableHeader className="bg-neutral-50 text-neutral-500">
            <TableRow>
              <TableHead>Estudiante</TableHead>
              <TableHead>Programa</TableHead>
              <TableHead>Promedio</TableHead>
              <TableHead>Progreso</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradeRecords.map((record) => (
              <TableRow key={record.student}>
                <TableCell className="font-semibold text-neutral-900">
                  {record.student}
                </TableCell>
                <TableCell>{record.program}</TableCell>
                <TableCell>{record.average.toFixed(1)}</TableCell>
                <TableCell className="w-64">
                  <div className="space-y-1">
                    <Progress value={record.progress * 100} />
                    <p className="text-xs text-neutral-500">
                      {Math.round(record.progress * 100)}% del plan curricular
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[record.status]}>
                    {record.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
