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
import { coursePrograms } from "@/data/site-content";

export function CourseShowcase() {
  const modular = coursePrograms.filter((course) => course.modality === "Modular");
  const annual = coursePrograms.filter((course) => course.modality === "Anual");

  return (
    <section
      id="cursos"
      className="rounded-3xl border bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Oferta académica
          </p>
          <h2 className="text-3xl font-semibold">Cursos modulares y anuales</h2>
          <p className="text-neutral-600">
            Visualiza la duración, costo de inscripción, modalidad de dictado y fecha
            de inicio. Todos los costos incluyen acceso a plataforma y certificado
            digital.
          </p>
        </div>
        <Badge variant="outline" className="text-xs uppercase tracking-widest">
          Matrícula virtual habilitada
        </Badge>
      </div>

      <Tabs defaultValue="modular" className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="modular">Modulares</TabsTrigger>
          <TabsTrigger value="anual">Anuales</TabsTrigger>
        </TabsList>
        <TabsContent value="modular">
          <CourseTable data={modular} />
        </TabsContent>
        <TabsContent value="anual">
          <CourseTable data={annual} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

type Props = {
  data: typeof coursePrograms;
};

function CourseTable({ data }: Props) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border">
      <Table>
        <TableHeader>
          <TableRow className="bg-neutral-50 text-neutral-500">
            <TableHead>Programa</TableHead>
            <TableHead>Duración</TableHead>
            <TableHead>Costo inscripción</TableHead>
            <TableHead>Inicio</TableHead>
            <TableHead>Certificación</TableHead>
            <TableHead>Cupos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((course) => (
            <TableRow key={course.name}>
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
