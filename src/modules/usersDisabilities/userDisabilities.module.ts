import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { UserDisability } from '../../shared/entities/userDisability.entity';
import { userDisabilitiesProviders } from './userDisabilities.provider';
import { CreateUserDisabilitiesService } from './context/createUserDisabilities/createUserDisabilities.service';
import { CreateUserDisabilitiesController } from './context/createUserDisabilities/createUserDisabilities.controller';
import { ListUserDisabilitiesByUserIdService } from './context/listUserDisabilitiesByUserId/listUserDisabilitiesByUserId.service';
import { ListUserDisabilitiesService } from './context/listUserDisabilities/listUserDisabilities.service';
import { ListUserDisabilitiesByUserIdController } from './context/listUserDisabilitiesByUserId/listUserDisabilitiesByUserId.controller';
import { ListUserDisabilitiesController } from './context/listUserDisabilities/listUserDisabilities.controller';
import { UserDisabilityRepo } from './repositories/userDisabilitily.repository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserDisability])],
  providers: [
    ...userDisabilitiesProviders,
    UserDisabilityRepo,
    CreateUserDisabilitiesService,
    ListUserDisabilitiesService,
    ListUserDisabilitiesByUserIdService,
  ],
  controllers: [
    CreateUserDisabilitiesController,
    ListUserDisabilitiesByUserIdController,
    ListUserDisabilitiesController,
  ],
})
export class UserDisabilitiesModule {}
