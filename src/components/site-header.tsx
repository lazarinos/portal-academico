import Link from "next/link";

const navItems = [
  { id: "mision", label: "Misión" },
  { id: "documentos", label: "Documentos" },
  { id: "cursos", label: "Cursos" },
  { id: "convenios", label: "Convenios" },
  { id: "galeria", label: "Galería" },
  { id: "certificados", label: "Certificados" },
  { id: "inscripciones", label: "Inscripciones" },
  { id: "servicios", label: "Servicios" },
  { id: "notas", label: "Notas" },
  { id: "videos", label: "Videos" },
  { id: "evaluaciones", label: "Evaluaciones" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="font-semibold text-neutral-900">
          Portal Académico ITPR
        </Link>
        <nav className="hidden gap-4 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1 transition hover:bg-neutral-900/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
