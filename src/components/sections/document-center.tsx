import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { documentGroups } from "@/data/site-content";

export function DocumentCenter() {
  return (
    <section
      id="documentos"
      className="rounded-3xl border bg-slate-950/90 p-8 text-white shadow-2xl"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-white/60">
          Transparencia normativa
        </p>
        <h2 className="text-3xl font-semibold">Documentos de elección y reglamento</h2>
        <p className="text-white/70">
          Consulta documentos internos y externos (CAP, ROF, convenios, resoluciones) con
          control de versiones y enlaces listos para descarga oficial.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_3fr]">
        <Card className="border-white/10 bg-white/5 text-white">
          <CardContent className="space-y-4 p-6">
            <p className="text-lg font-semibold">Estado de actualización</p>
            <div className="space-y-3 text-sm text-white/80">
              <p>Última revisión por Secretaría Académica: 06 mayo 2024.</p>
              <p>
                Enlace con mesa de partes digital para subir anexos actualizados y
                resoluciones complementarias.
              </p>
              <p className="rounded-xl border border-white/20 bg-white/10 p-4 text-xs">
                Los archivos están firmados digitalmente (firma PSE) y cuentan con código
                QR para verificar autenticidad y vigencia.
              </p>
            </div>
          </CardContent>
        </Card>

        <Accordion
          type="multiple"
          className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur"
        >
          {documentGroups.map((group) => (
            <AccordionItem key={group.title} value={group.title}>
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-3">
                  <span>{group.title}</span>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {group.scope}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-white/5 bg-white/5 p-6 text-white/80">
                <p>{group.description}</p>
                <div className="space-y-3 text-sm">
                  {group.docs.map((doc) => (
                    <div
                      key={doc.code}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold text-white">{doc.name}</p>
                        <p className="text-xs text-white/60">
                          {doc.code} · {doc.version}
                        </p>
                      </div>
                      <Badge className="bg-emerald-500 text-emerald-950">
                        Descargar
                      </Badge>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
