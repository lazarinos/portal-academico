import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convenios } from "@/data/site-content";

export function ConveniosSection() {
  return (
    <section
      id="convenios"
      className="space-y-6 rounded-3xl border bg-gradient-to-br from-slate-50 to-white p-8"
    >
      <div>
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Alianzas estratégicas
        </p>
        <h2 className="text-3xl font-semibold">Convenios vigentes</h2>
        <p className="text-neutral-600">
          Instituciones públicas, privadas e internacionales que respaldan prácticas,
          homologación de créditos y empleabilidad.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {convenios.map((item) => (
          <Card key={item.entity} className="h-full border-neutral-200">
            <CardHeader>
              <CardTitle className="text-lg">{item.entity}</CardTitle>
              <p className="text-sm text-neutral-500">{item.focus}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-700">
              {item.benefits.map((benefit) => (
                <p key={benefit}>• {benefit}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
