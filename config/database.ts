import env from "#start/env";
import { defineConfig } from "@adonisjs/lucid";

const dbConfig = defineConfig({
  connection: "postgres",
  connections: {
    postgres: {
      client: "pg",
      connection: {
        host: env.get("DB_HOST"),
        port: env.get("DB_PORT"),
        ssl: env.get("DO_SSL") ? { rejectUnauthorized: true } : false,
        user: env.get("DB_USER"),
        password: env.get("DB_PASSWORD"),
        database: env.get("DB_DATABASE"),
      },
      migrations: {
        naturalSort: true,
        paths: ["database/migrations"],
      },
    },
  },
});

export default dbConfig;
