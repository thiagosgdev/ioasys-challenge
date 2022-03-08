// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [process.env.DB_ENTITIES],
  migrations: [process.env.DB_MIGRATIONS],
  ssl: process.env.DB_SSL,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  cli: {
    entitiesDir: process.env.DB_ENTITIES_DIR,
    migrationsDir: process.env.DB_MIGRATIONS_DIR,
  },
};
