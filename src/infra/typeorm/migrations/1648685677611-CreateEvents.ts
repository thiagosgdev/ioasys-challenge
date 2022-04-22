import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEvents1648685677611 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid ()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'max_participants',
            type: 'int',
          },
          {
            name: 'start_time',
            type: 'varchar',
          },
          {
            name: 'end_time',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'user_identity',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'is_online',
            type: 'boolean',
            default: false,
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'is_promoted',
            type: 'boolean',
            default: false,
          },
          {
            name: 'is_pet_friendly',
            type: 'boolean',
            default: false,
          },
          {
            name: 'activity_id',
            type: 'uuid',
          },
          {
            name: 'user_id',
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
            name: 'FKActivityEvent',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['activity_id'],
          },
          {
            name: 'FKUserEvent',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
