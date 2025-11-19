import { betterAuth } from "better-auth";
import { nextCookies, toNextJsHandler } from "better-auth/next-js";
import { PostgresDialect } from "kysely";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const pool = connectionString
  ? new Pool({
      connectionString,
      max: 5,
    })
  : null;

export const auth = betterAuth({
  appName: "Portal Académico",
  secret: process.env.BETTER_AUTH_SECRET,
  basePath: "/api/auth",
  database: pool
    ? {
        dialect: new PostgresDialect({ pool }),
        type: "postgres",
      }
    : undefined,
  emailAndPassword: {
    enabled: true,
  },
  // Expose user role in profile; default to student.
  user: {
    fields: {
      role: {
        type: "string",
        required: false,
        input: true,
        defaultValue: "student",
      },
    },
  },
  plugins: [nextCookies()],
});

export const { GET, POST } = toNextJsHandler(auth);
