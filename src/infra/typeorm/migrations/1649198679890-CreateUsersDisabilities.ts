import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDisabilities1649198679890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_disabilities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid ()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'disability_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKUsersUsersDisabilities',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
          },
          {
            name: 'FKDisabilitiesUsersDisabilities',
            referencedTableName: 'disabilities',
            referencedColumnNames: ['id'],
            columnNames: ['disability_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_disabilities');
  }
}
