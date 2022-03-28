import 'dotenv/config';
import { v4 as uuidV4 } from 'uuid';

import { Client } from 'pg';

const client = new Client({
  user: `${process.env.DB_USERNAME}`,
  host: `${process.env.DB_HOST}`,
  database: `${process.env.DB_NAME}`,
  password: `${process.env.DB_PASSWORD}`,
  port: Number(`${process.env.DB_PORT}`),
});

const createAdmin = async () => {
  const id = uuidV4();

  await client.connect();
  await client.query(
    `INSERT INTO messages_types(id, name, active, created_at, updated_at, deleted_at) VALUES
          ('${id}', 'Atividade Física', true, now(), null, null),
          ('${uuidV4()}', 'Meditação', true, now(), null, null),
          ('${uuidV4()}', 'Bem estar', true, now(), null, null),
          ('${uuidV4()}', 'Saúde mental', true, now(), null, null),
          ('${uuidV4()}', 'Alimentação', true, now(), null, null);`,
  );
  //  await client.query(
  //    `INSERT INTO messages(id, name, active, created_at, updated_at, deleted_at) VALUES
  //        ('${id}', 'Atividade Física', true, now(), null, null),
  //        ('${uuidV4()}', 'Meditação', true, now(), null, null),
  //        ('${uuidV4()}', 'Bem estar', true, now(), null, null),
  //        ('${uuidV4()}', 'Saúde mental', true, now(), null, null),
  //        ('${uuidV4()}', 'Alimentação', true, now(), null, null);`,
  //  );
  console.log('All done!');
  await client.end();
};

createAdmin();
