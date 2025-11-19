import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="rounded-3xl border bg-white p-8 shadow-sm"
    >
      <div className="mb-6">
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Servicios complementarios
        </p>
        <h2 className="text-3xl font-semibold">
          Dormitorios, comedor y bienestar
        </h2>
        <p className="text-neutral-600">
          Infraestructura diseñada para que los estudiantes del interior puedan vivir,
          alimentarse y desarrollarse dentro del campus con seguridad.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name} className="h-full border-neutral-200">
            <CardHeader>
              <CardTitle className="text-xl">{service.name}</CardTitle>
              <p className="text-sm text-neutral-500">{service.description}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-neutral-700">
              {service.features.map((feature) => (
                <p key={feature}>• {feature}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
