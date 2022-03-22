import 'dotenv/config';
import { hash } from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';

import { Client } from 'pg';

const client = new Client({
  user: `${process.env.DB_USER}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASSWORD}`,
  port: Number(`${process.env.DB_PORT}`),
});

const createAdmin = async () => {
  const id = uuidV4();
  const password = await hash('admin', 12);

  await client.connect();
  await client.query(
    `INSERT INTO users(id, first_name, last_name, email, password, token, refresh_token, 
    is_admin, created_at, updated_at, deleted_at) VALUES ('${id}', 'admin', 'admin',
    'admin@admin.com', '${password}', null, null, true, now(), null, null);`,
  );
  console.log('User created!');
  await client.end();
};

createAdmin();
