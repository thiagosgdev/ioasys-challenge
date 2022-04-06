import 'dotenv/config';
import { hash } from 'bcrypt';

import { Client } from 'pg';

const client = new Client({
  user: `${process.env.DB_USERNAME}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASSWORD}`,
  port: Number(`${process.env.DB_PORT}`),
});

const createAdmin = async () => {
  let password = await hash('12345678', 8);

  await client.connect();
  await client.query(
    `INSERT INTO users (id, name, password, email, is_admin, phone, emergency_name, emergency_phone) VALUES ('758105a4-6a67-4afb-bb4f-6db73dcb0366', 'Squad 8 Camp', '${password}', 'squad8.test@gmail.com', false, '(99)99999-9999', 'Fabi', '(88)88888-8888');`,
  );
  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, is_admin, phone, emergency_name, emergency_phone) VALUES ('0fb4deeb-7fb5-4ea9-818b-fc25af011ce0', 'Admin', '${password}', 'admin@admin.com', true, '(99)99999-9999', null, null);
    `,
  );
  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, is_admin, phone, emergency_name, emergency_phone) VALUES ('3dd96c63-5892-46ab-8830-e1231d32c6d6', 'Jon Doe', '${password}', 'jon_doe@test.com', true, '(88)88888-8888', null, null);;
    `,
  );
  console.log('Users created!');
  await client.end();
};

createAdmin();
