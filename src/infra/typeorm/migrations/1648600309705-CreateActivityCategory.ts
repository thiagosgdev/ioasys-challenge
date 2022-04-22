import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateActivityCategory1648600309705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'activity_categories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid ()',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
          {
            name: 'activity_id',
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
            name: 'FKActivityActivitiesCategories',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['activity_id'],
          },
          {
            name: 'FKCategoryActivitiesCategories',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activity_categories');
  }
}
