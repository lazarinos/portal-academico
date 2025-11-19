import { getPool } from "@/lib/db";
import { getHeroContent } from "@/lib/hero";
import { NextResponse } from "next/server";

export async function GET() {
  const hero = await getHeroContent();
  return NextResponse.json({ data: hero });
}

export async function POST(req: Request) {
  const pool = getPool();
  if (!pool) {
    return NextResponse.json({ error: "DB not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { title, subtitle, imageUrl, ctaLabel, ctaTarget } = body;

  // Validate session via Better Auth
  try {
    const sessionRes = await fetch(new URL("/api/auth/get-session", req.url), {
      headers: { cookie: req.headers.get("cookie") ?? "" },
      cache: "no-store",
    });
    const sessionJson = await sessionRes.json();
    const role = sessionJson?.user?.role ?? sessionJson?.data?.user?.role;
    if (role !== "admin") {
      return NextResponse.json({ error: "Solo admin puede editar" }, { status: 401 });
    }
  } catch (error) {
    console.error("No se pudo verificar sesión", error);
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  if (!title || !subtitle || !imageUrl || !ctaLabel || !ctaTarget) {
    return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
  }

  await pool.query(
    `
      INSERT INTO hero_settings (id, title, subtitle, image_url, cta_label, cta_target)
      VALUES (1, $1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE
      SET title = EXCLUDED.title,
          subtitle = EXCLUDED.subtitle,
          image_url = EXCLUDED.image_url,
          cta_label = EXCLUDED.cta_label,
          cta_target = EXCLUDED.cta_target
    `,
    [title, subtitle, imageUrl, ctaLabel, ctaTarget]
  );

  return NextResponse.json({ ok: true });
}
