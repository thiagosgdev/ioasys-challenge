import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMoodActivity1650391819187 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'moods_activities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid ()',
          },
          {
            name: 'mood_id',
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
            name: 'FKMoodsMoodsActivities',
            referencedTableName: 'moods',
            referencedColumnNames: ['id'],
            columnNames: ['mood_id'],
          },
          {
            name: 'FKActivitiesMoodsActivities',
            referencedTableName: 'activities',
            referencedColumnNames: ['id'],
            columnNames: ['activity_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('moods_activities');
  }
}
