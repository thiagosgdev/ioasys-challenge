import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/infra/database/connection';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
