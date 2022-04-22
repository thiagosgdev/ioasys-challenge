import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Message } from '../../shared/entities/message.entity';
import { CreateMessageController } from './context/createMessage/createMessage.controller';
import { CreateMessageService } from './context/createMessage/createMessage.service';
import { ListMessagesController } from './context/listMessages/listMessages.controller';
import { ListMessagesService } from './context/listMessages/listMessages.service';
import { messageProviders } from './message.provider';
import { DailyMessageController } from './context/dailyMessage/dailyMessage.controller';
import { DailyMessageService } from './context/dailyMessage/dailyMessage.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Message])],
  providers: [
    ...messageProviders,
    ListMessagesService,
    CreateMessageService,
    DailyMessageService,
  ],
  controllers: [
    ListMessagesController,
    CreateMessageController,
    DailyMessageController,
  ],
})
export class MessageModule {}
