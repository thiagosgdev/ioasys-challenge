import 'dotenv/config';

export default () => {
  return {
    nodeEnv: process.env.NODE_ENV || 'local',

    port: parseInt(process.env.PORT, 10),
    jwtSecret: process.env.JWT_SECRET,
    jwtExpires: process.env.JWT_EXPIRES_IN,
    jwtRefExpires: process.env.JWT_REFRESH_EXP_IN,
    dbHost: process.env.DB_HOST,
    dbPort: parseInt(process.env.DB_PORT, 5432),
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  };
};
