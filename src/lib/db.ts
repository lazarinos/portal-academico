import "server-only";
import { Pool } from "pg";
import { env } from "@/env";

const connectionString = env.DATABASE_URL;

let pool: Pool | null = null;

export function getPool() {
  if (!connectionString) return null;
  if (!pool) {
    pool = new Pool({
      connectionString,
      max: 5,
    });
  }
  return pool;
}
