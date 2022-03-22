import 'dotenv/config';
import { Client } from 'pg';

const client = new Client({
  user: `${process.env.DB_USERNAME}`,
  host: `${process.env.DB_HOST}`,
  database: `postgres`,
  password: `${process.env.DB_PASSWORD}`,
  port: Number(`${process.env.DB_PORT}`),
});

const createDatabase = async () => {
  await client.connect();
  await client.query(`CREATE DATABASE ${process.env.DB_NAME};`);
  console.log('Database Created!');
  await client.end();
};

createDatabase();
