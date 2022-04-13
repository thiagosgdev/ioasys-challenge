import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { MessageType } from '../../shared/entities/messageType.entity';
import { CreateMessageTypeController } from './context/createMessageType/createMessageType.controller';
import { CreateMessageTypeService } from './context/createMessageType/createMessageType.service';
import { ListMessagesTypesController } from './context/listMessages/listMessagesTypes.controller';
import { ListMessagesTypesService } from './context/listMessages/listMessagesTypes.service';
import { messageTypesProviders } from './messagesTypes.provider';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([MessageType])],
  providers: [
    ...messageTypesProviders,
    ListMessagesTypesService,
    CreateMessageTypeService,
  ],
  controllers: [ListMessagesTypesController, CreateMessageTypeController],
})
export class MessageTypeModule {}
