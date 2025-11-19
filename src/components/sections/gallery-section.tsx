import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { announcements, galleryImages } from "@/data/site-content";

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-start"
    >
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide text-neutral-500">
            Galería institucional
          </p>
          <h2 className="text-2xl font-semibold">Vida académica y campus</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border bg-neutral-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-sm text-neutral-600">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div
        id="convocatorias"
        className="space-y-4 rounded-3xl border bg-neutral-900 p-6 text-white"
      >
        <div>
          <p className="text-sm uppercase tracking-wide text-white/60">
            Anuncios y convocatorias
          </p>
          <h2 className="text-2xl font-semibold">Cursos en convocatoria</h2>
          <p className="text-white/70">
            Publicaciones oficiales con fechas, modalidades y etiquetas clave para
            que postules a tiempo.
          </p>
        </div>
        {announcements.map((item) => (
          <Card
            key={item.title}
            className="border-white/10 bg-white/10 text-white"
          >
            <CardContent className="space-y-3 p-5">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{item.deadline}</span>
                <Badge className="bg-emerald-400 text-emerald-950">
                  Abierto
                </Badge>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge
                    key={`${item.title}-${tag}`}
                    variant="secondary"
                    className="border-white/20 bg-white/10 text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
