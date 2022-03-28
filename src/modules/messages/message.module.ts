import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';

import { Message } from 'src/shared/entities/message.entity';
import { CreateMessageController } from './context/createMessage/createMessage.controller';
import { CreateMessageService } from './context/createMessage/createMessage.service';
import { ListMessagesController } from './context/listMessages/listMessages.controller';
import { ListMessagesService } from './context/listMessages/listMessages.service';
import { messageProviders } from './message.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Message])],
  providers: [...messageProviders, ListMessagesService, CreateMessageService],
  controllers: [ListMessagesController, CreateMessageController],
})
export class MessageModule {}
