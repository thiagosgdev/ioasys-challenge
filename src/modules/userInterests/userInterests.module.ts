import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { UserInterest } from '../../shared/entities/userInterests.entity';
import { userInterestsProviders } from './userInterests.provider';
import { CreateUserInterestService } from './context/createUserInterests/createUserInterest.service';
import { ListUserInterestsService } from './context/listUserInterests/listUserInterests.service';
import { CreateUserInterestController } from './context/createUserInterests/createUserInterest.controller';
import { ListUserInterestsController } from './context/listUserInterests/listUserInterests.controller';
import { ListUserInterestsByUserIdService } from './context/listUserInterestsByUserId/listUserInterestsByUserId.service';
import { ListUserInterestsByUserIdController } from './context/listUserInterestsByUserId/listUserInterestsByUserId.controller';
import { UserInterestRepo } from './repositories/userInterests.repository';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserInterest])],
  providers: [
    ...userInterestsProviders,
    UserInterestRepo,
    CreateUserInterestService,
    ListUserInterestsService,
    ListUserInterestsByUserIdService,
  ],
  controllers: [
    CreateUserInterestController,
    ListUserInterestsController,
    ListUserInterestsByUserIdController,
  ],
})
export class UserInterestsModule {}
