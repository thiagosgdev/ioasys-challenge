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
    `INSERT INTO users (id, name, password, email, about_me, city, is_admin, is_premium, phone, emergency_name, emergency_phone) VALUES ('758105a4-6a67-4afb-bb4f-6db73dcb0366', 'Squad 8 Camp', '${password}', 'squad8.test@gmail.com', null, null, false, false, '(99)99999-9999', null, null);`,
  );
  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, about_me, city, is_admin, is_premium, phone, emergency_name, emergency_phone) VALUES ('0fb4deeb-7fb5-4ea9-818b-fc25af011ce0', 'Admin', '${password}', 'admin@admin.com', null, 'Sao Paulo', true, false, '(99)99999-9999', null, null);
    `,
  );
  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, about_me, city, is_admin, is_premium, phone, emergency_name, emergency_phone) VALUES ('3dd96c63-5892-46ab-8830-e1231d32c6d6', 'Luma Silva', '${password}', 'luma.silva123987@gmail.com', 'Estudante de Engenharia de Produção, gosto de fazer atividades físicas e cursos que estimulam a criatividade.', 'São Paulo', false, true,'(12)34567-8901', null, null);;
    `,
  );
  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, about_me, city, is_admin, is_premium, phone, emergency_name, emergency_phone) VALUES ('14522631-04b7-4de1-9bba-9c35758e8c5e', 'Premium user', '${password}', 'premium@premium.com', null, 'New York', false, true, '(88)88888-8888', null, null);;
    `,
  );

  password = await hash('12345678', 8);
  await client.query(
    `
    INSERT INTO users (id, name, password, email, about_me, city, is_admin, is_premium, phone, emergency_name, emergency_phone) VALUES ('638e3a55-faf5-48f2-98fc-89ce04e0b51a', 'Student 01', '${password}', 'student1@test.com', null, 'Belo Horizonte', false, false, '(11)22222-2222', null, null);;
    `,
  );
  console.log('Users created!');
  await client.end();
};

createAdmin();
