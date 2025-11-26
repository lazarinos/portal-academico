import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroStats, announcements } from "@/data/site-content";
import Link from "next/link";
import { HeroContent } from "@/lib/hero";

type Props = {
  content: HeroContent;
};

export function HeroSection({ content }: Props) {
  const mainAnnouncement = announcements[0];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden rounded-3xl border bg-neutral-900 px-8 py-16 text-white shadow-2xl"
    >
      <div className="absolute inset-0">
        <Image
          src={content.imageUrl}
          alt="Hero background"
          fill
          className="object-cover opacity-90"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/55 to-black/85" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="border border-white/20 bg-white/10 text-white"
          >
            Convocatoria institucional 2024-II
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="text-lg text-white/80">{content.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-neutral-900">
              <Link href={content.ctaTarget}>{content.ctaLabel}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="#documentos">Ver documentos oficiales</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-emerald-500 text-emerald-950">
                Convocatoria
              </Badge>
              <span className="text-sm text-white/80">
                {mainAnnouncement.deadline}
              </span>
            </div>
            <h2 className="text-2xl font-semibold">{mainAnnouncement.title}</h2>
            <p className="text-white/80">{mainAnnouncement.description}</p>
            <div className="flex flex-wrap gap-2">
              {mainAnnouncement.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-900/40 p-4 text-sm text-white/80">
              Presenta tus documentos digitalmente, agenda entrevista virtual y
              recibe tu constancia en menos de 48 horas. Sistema integrado con
              RENIEC para garantizar la veracidad de los datos.
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
}
