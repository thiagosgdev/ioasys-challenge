import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { CreateUserMoodController } from 'src/modules/usersMoods/context/createUserMood/createUserMood.controller';
import { CreateUserMoodService } from 'src/modules/usersMoods/context/createUserMood/createUserMood.service';
import { ListUserMoodsController } from 'src/modules/usersMoods/context/listUserMoods/listUserMoods.controller';
import { ListUserMoodsService } from 'src/modules/usersMoods/context/listUserMoods/listUserMoods.service';
import { userMoodProviders } from 'src/modules/usersMoods/userMoods.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UserMood])],
  providers: [
    ...userMoodProviders,
    CreateUserMoodService,
    ListUserMoodsService,
  ],
  controllers: [CreateUserMoodController, ListUserMoodsController],
})
export class UserMoodModule {}
