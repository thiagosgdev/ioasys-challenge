import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Disability } from 'src/shared/entities/disability.entity';
import { disabilitiesProviders } from 'src/modules/disabilities/disabilities.provider';
import { ListDisabilitiesService } from './context/listDisabilities/listDisabilities.service';
import { ListDisabilitiesController } from './context/listDisabilities/listDisabilities.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Disability])],
  providers: [...disabilitiesProviders, ListDisabilitiesService],
  controllers: [ListDisabilitiesController],
})
export class DisabilitiesModule {}
