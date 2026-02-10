import type { Config } from 'drizzle-kit';

export default {
  schema: './src/models/*.ts',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_PATH || './neobank.db',
  },
} satisfies Config;
