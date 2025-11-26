import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { announcements, galleryImages } from "@/data/site-content";

export function PrincipalSection() {
  const recentPhotos = galleryImages.slice(0, 3);
  const [featured, ...restPhotos] = recentPhotos;
  const [mainAnnouncement, ...otherAnnouncements] = announcements;

  return (
    <section
      id="principal"
      className="rounded-3xl border bg-white shadow-md"
    >
      <div className="space-y-8 px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-emerald-500 text-emerald-950">Principal</Badge>
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Convocatorias activas
              </span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Anuncios y fotos recientes
            </h2>
            <p className="max-w-3xl text-neutral-600">
              Convocatorias prioritarias con fechas, etiquetas y una vista de lo más
              reciente en campus. La galería completa queda disponible en la sección
              dedicada.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/inscripciones"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Inscribirme ahora
            </Link>
            <Link
              href="/documentos"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
            >
              Ver normativa
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[3fr_2.2fr] lg:items-start">
          <div className="space-y-3">
            {mainAnnouncement ? (
              <Card className="border-neutral-200 bg-white shadow-sm">
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500">
                    <span>{mainAnnouncement.deadline}</span>
                    <Badge className="bg-emerald-400 text-emerald-950">Abierto</Badge>
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight">
                    {mainAnnouncement.title}
                  </h3>
                  <p className="text-neutral-700">{mainAnnouncement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mainAnnouncement.tags.map((tag) => (
                      <Badge
                        key={`${mainAnnouncement.title}-${tag}`}
                        variant="outline"
                        className="bg-neutral-50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : null}

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                Otras convocatorias
              </p>
              <div className="mt-4 space-y-3">
                {otherAnnouncements.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500">
                      <span>{item.deadline}</span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-900">
                        Vigente
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-neutral-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge
                          key={`${item.title}-${tag}`}
                          variant="secondary"
                          className="border-neutral-200 bg-neutral-50 text-neutral-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white text-neutral-900 p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  Fotos recientes
                </p>
                <h3 className="text-lg font-semibold text-neutral-900">Lo ultimo</h3>
              </div>
              <Link
                href="/galeria"
                className="text-sm font-semibold text-neutral-800 underline underline-offset-4"
              >
                Ver galeria
              </Link>
            </div>

            {featured ? (
              <figure className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  width={800}
                  height={520}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white drop-shadow">
                  <p className="text-sm font-semibold">{featured.caption}</p>
                  {featured.description ? (
                    <p className="text-xs text-white/80 line-clamp-2">
                      {featured.description}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            ) : null}

            <div className="grid gap-3 sm:grid-cols-2">
              {restPhotos.map((photo) => (
                <figure
                  key={photo.src}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={260}
                    className="h-32 w-full object-cover"
                  />
                  <figcaption className="px-3 py-3 text-sm text-neutral-700">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
