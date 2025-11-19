import { evaluationBlueprints as fallbackEvaluations } from "@/data/site-content";
import { getPool } from "@/lib/db";

export type Evaluation = {
  id: number;
  title: string;
  questions: number;
  duration: string;
  competency: string;
};

export async function fetchEvaluations(): Promise<Evaluation[]> {
  const pool = getPool();
  if (!pool) return fallbackEvaluationsFromContent();
  try {
    const result = await pool.query<Evaluation>(
      "SELECT id, title, questions, duration, competency FROM evaluations ORDER BY id ASC"
    );
    if (result.rows.length === 0) return fallbackEvaluationsFromContent();
    return result.rows;
  } catch (error) {
    console.error("Error leyendo evaluaciones desde la BD", error);
    return fallbackEvaluationsFromContent();
  }
}

function fallbackEvaluationsFromContent(): Evaluation[] {
  return fallbackEvaluations.map((item, index) => ({
    id: index + 1,
    title: item.title,
    questions: item.questions,
    duration: item.time,
    competency: item.competency,
  }));
}
