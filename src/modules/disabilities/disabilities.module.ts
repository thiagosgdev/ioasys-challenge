import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Disability } from '../../shared/entities/disability.entity';
import { disabilitiesProviders } from './disabilities.provider';
import { ListDisabilitiesService } from './context/listDisabilities/listDisabilities.service';
import { ListDisabilitiesController } from './context/listDisabilities/listDisabilities.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Disability])],
  providers: [...disabilitiesProviders, ListDisabilitiesService],
  controllers: [ListDisabilitiesController],
})
export class DisabilitiesModule {}
