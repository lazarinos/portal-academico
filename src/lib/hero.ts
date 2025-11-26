import "server-only";
import { getPool } from "@/lib/db";

export type HeroContent = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLabel: string;
  ctaTarget: string;
};

const fallbackHero: HeroContent = {
  title: "Portal académico del Instituto Tecnológico Productivo de la Región",
  subtitle:
    "Transparencia, innovación y servicios académicos en un solo lugar. Consulta normativa vigente, cursos, convenios e inscripciones virtuales.",
  imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  ctaLabel: "Quiero inscribirme",
  ctaTarget: "#inscripciones",
};

export async function getHeroContent(): Promise<HeroContent> {
  const pool = getPool();
  if (!pool) return fallbackHero;
  try {
    const result = await pool.query<{
      title: string;
      subtitle: string;
      image_url: string;
      cta_label: string;
      cta_target: string;
    }>("SELECT title, subtitle, image_url, cta_label, cta_target FROM hero_settings ORDER BY id ASC LIMIT 1");
    if (result.rowCount === 0) return fallbackHero;
    const row = result.rows[0];
    return {
      title: row.title,
      subtitle: row.subtitle,
      imageUrl: row.image_url,
      ctaLabel: row.cta_label,
      ctaTarget: row.cta_target,
    };
  } catch (error) {
    console.error("No se pudo leer hero_settings", error);
    return fallbackHero;
  }
}
