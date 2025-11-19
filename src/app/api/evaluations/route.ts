import { fetchEvaluations } from "@/lib/evaluations";
import { NextResponse } from "next/server";

export async function GET() {
  const evaluations = await fetchEvaluations();
  return NextResponse.json({ data: evaluations });
}
