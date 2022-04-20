import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WellnessTip } from 'src/shared/entities/wellnessTips.entity';
import { DatabaseModule } from '../../infra/database.module';
import { ListWellnessTipsController } from './context/listWellnessTips/listWellnessTips.controller';
import { ListWellnessTipsService } from './context/listWellnessTips/listWellnessTips.service';
import { wellnessTipsProviders } from './wellnessTips.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([WellnessTip])],
  providers: [...wellnessTipsProviders, ListWellnessTipsService],
  controllers: [ListWellnessTipsController],
})
export class WellnessTipsModule {}
