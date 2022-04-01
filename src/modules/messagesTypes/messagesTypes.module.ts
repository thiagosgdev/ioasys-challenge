import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { MessageType } from 'src/shared/entities/messageType.entity';
import { CreateMessageTypeController } from 'src/modules/messagesTypes/context/createMessageType/createMessageType.controller';
import { CreateMessageTypeService } from 'src/modules/messagesTypes/context/createMessageType/createMessageType.service';
import { ListMessagesTypesController } from 'src/modules/messagesTypes/context/listMessages/listMessagesTypes.controller';
import { ListMessagesTypesService } from 'src/modules/messagesTypes/context/listMessages/listMessagesTypes.service';
import { messageTypesProviders } from 'src/modules/messagesTypes/messagesTypes.provider';

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
