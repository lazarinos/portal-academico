"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { type GalleryImage, galleryImages } from "@/data/site-content";

export function GallerySection() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const cover = galleryImages[0];
  const rest = useMemo(() => galleryImages.slice(1), []);

  return (
    <section
      id="galeria"
      className="rounded-3xl border bg-white p-6 shadow-sm lg:p-8"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-neutral-500">
            Galeria institucional
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-neutral-900">
            Vida academica y campus
          </h2>
          <p className="text-neutral-600">
            Registro visual curado de las ultimas actividades, talleres y
            convocatorias. Cada imagen incluye su contexto: toca para abrirla y
            ver la descripcion completa.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase text-neutral-500">
          <span className="inline-flex h-8 items-center rounded-full bg-neutral-100 px-4 text-[11px] font-semibold tracking-[0.18em] text-neutral-700 whitespace-nowrap">
            Archivo completo
          </span>
          <span className="inline-flex h-8 items-center rounded-full bg-neutral-900 px-4 text-[11px] font-semibold tracking-[0.18em] text-white whitespace-nowrap">
            Reciente
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_3fr] lg:items-start">
        {cover ? (
          <button
            onClick={() => setSelected(cover)}
            className="group relative h-full overflow-hidden rounded-2xl border bg-neutral-900 text-left shadow-lg ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              width={1200}
              height={800}
              className="h-full min-h-[260px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge className="bg-emerald-400 text-emerald-950">Reciente</Badge>
                <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                  Destacado
                </Badge>
              </div>
              <h3 className="text-2xl font-semibold text-white drop-shadow">
                {cover.caption}
              </h3>
              {cover.description ? (
                <p className="mt-2 line-clamp-2 text-sm text-white/80">
                  {cover.description}
                </p>
              ) : null}
            </div>
          </button>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((image) => (
            <button
              key={image.src}
              onClick={() => setSelected(image)}
              className="group relative overflow-hidden rounded-2xl border bg-neutral-50 text-left transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-sm font-semibold text-neutral-900">
                  {image.caption}
                </p>
                {image.description ? (
                  <p className="line-clamp-2 text-sm text-neutral-600">
                    {image.description}
                  </p>
                ) : (
                  <p className="text-sm text-neutral-500">
                    Sin descripcion disponible
                  </p>
                )}
                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Ver detalle
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-neutral-600 shadow transition hover:scale-105 hover:bg-white"
              aria-label="Cerrar"
              onClick={() => setSelected(null)}
            >
              <X size={16} />
            </button>
            <div className="grid gap-0 md:grid-cols-[3fr_2fr]">
              <div className="relative h-[70vh] min-h-[320px]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Archivo institucional
                  </p>
                  <h3 className="text-2xl font-semibold text-neutral-900">
                    {selected.caption}
                  </h3>
                  {selected.description ? (
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {selected.description}
                    </p>
                  ) : (
                    <p className="text-sm leading-relaxed text-neutral-500">
                      Sin descripcion disponible para esta imagen.
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Fotografia</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
