import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { missionVisionValues } from "@/data/site-content";

export function MissionSection() {
  return (
    <section
      id="valores"
      className="space-y-6 rounded-3xl border bg-white/80 p-8 shadow-sm backdrop-blur"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Valores institucionales
        </p>
        <h2 className="text-3xl font-semibold leading-tight">
          Valores, mision y vision
        </h2>
        <p className="mt-2 text-neutral-600">
          Marcos estrategicos aprobados por Consejo Directivo (RD 045-2024) que
          alinean cada servicio academico y administrativo del instituto.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {missionVisionValues.map((item) => (
          <Card key={item.title} className="border-neutral-200">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <p className="text-sm text-neutral-500">{item.description}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-700">
              {item.highlights.map((highlight) => (
                <p key={highlight}>- {highlight}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
