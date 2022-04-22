import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEventAccessibility1649369356358
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events_accessibilities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid ()',
          },
          {
            name: 'disability_id',
            type: 'uuid',
          },
          {
            name: 'event_id',
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
            name: 'FKEventsEventsAccessibilities',
            referencedTableName: 'events',
            referencedColumnNames: ['id'],
            columnNames: ['event_id'],
          },
          {
            name: 'FKAccessibilitiesEventsAccessibilities',
            referencedTableName: 'disabilities',
            referencedColumnNames: ['id'],
            columnNames: ['disability_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events_acessibilities');
  }
}
