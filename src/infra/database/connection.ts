import {
  createConnection,
  getConnection,
  getConnectionOptions,
  Connection,
  QueryRunner,
  getConnectionManager,
} from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(),
  },
];
export const connection = {
  async create(): Promise<Connection> {
    return await createConnection();
  },

  async close() {
    await getConnection().close();
  },

  async clear() {
    const connection = getConnection();
    const entities = getConnection().entityMetadatas;
    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  },

  async init() {
    let connection: Connection;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const queryRunner: QueryRunner = connection.createQueryRunner();
    return queryRunner;
  },
};
