import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Message } from 'src/shared/entities/message.entity';
import { CreateMessageController } from 'src/modules/messages/context/createMessage/createMessage.controller';
import { CreateMessageService } from 'src/modules/messages/context/createMessage/createMessage.service';
import { ListMessagesController } from 'src/modules/messages/context/listMessages/listMessages.controller';
import { ListMessagesService } from 'src/modules/messages/context/listMessages/listMessages.service';
import { messageProviders } from 'src/modules/messages/message.provider';
import { DailyMessageController } from 'src/modules/messages/context/dailyMessage/dailyMessage.controller';
import { DailyMessageService } from 'src/modules/messages/context/dailyMessage/dailyMessage.service';

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
