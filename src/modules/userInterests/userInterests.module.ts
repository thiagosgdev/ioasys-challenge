import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { UserInterest } from 'src/shared/entities/userInterests.entity';
import { userInterestsProviders } from 'src/modules/userInterests/userInterests.provider';
import { CreateUserInterestService } from 'src/modules/userInterests/context/createUserInterests/createUserInterest.service';
import { ListUserInterestsService } from 'src/modules/userInterests/context/listUserInterests/listUserInterests.service';
import { CreateUserInterestController } from 'src/modules/userInterests/context/createUserInterests/createUserInterest.controller';
import { ListUserInterestsController } from 'src/modules/userInterests/context/listUserInterests/listUserInterests.controller';
import { ListUserInterestsByUserIdService } from 'src/modules/userInterests/context/listUserInterestsByUserId/listUserInterestsByUserId.service';
import { ListUserInterestsByUserIdController } from 'src/modules/userInterests/context/listUserInterestsByUserId/listUserInterestsByUserId.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserInterest])],
  providers: [
    ...userInterestsProviders,
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
