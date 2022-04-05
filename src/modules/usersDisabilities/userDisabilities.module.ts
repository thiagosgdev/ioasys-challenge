import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { UserDisability } from 'src/shared/entities/userDisability.entity';
import { userDisabilitiesProviders } from 'src/modules/usersDisabilities/userDisabilities.provider';
import { CreateUserDisabilitiesService } from 'src/modules/usersDisabilities/context/createUserDisabilities/createUserDisabilities.service';
import { CreateUserDisabilitiesController } from 'src/modules/usersDisabilities/context/createUserDisabilities/createUserDisabilities.controller';
import { ListUserDisabilitiesByUserIdService } from 'src/modules/usersDisabilities/context/listUserDisabilitiesByUserId/listUserDisabilitiesByUserId.service';
import { ListUserDisabilitiesService } from 'src/modules/usersDisabilities/context/listUserDisabilities/listUserDisabilities.service';
import { ListUserDisabilitiesByUserIdController } from 'src/modules/usersDisabilities/context/listUserDisabilitiesByUserId/listUserDisabilitiesByUserId.controller';
import { ListUserDisabilitiesController } from 'src/modules/usersDisabilities/context/listUserDisabilities/listUserDisabilities.controller';
import { UserDisabilityRepo } from 'src/modules/usersDisabilities/repositories/userDisabilitily.repository';

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
