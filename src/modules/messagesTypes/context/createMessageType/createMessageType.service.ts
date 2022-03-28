import { Inject } from '@nestjs/common';
import { CreateMessageTypeRequestDTO } from 'src/shared/dtos/messagesTypes/createMessageTypeRequest.dto';
import { MessageType } from 'src/shared/entities/messageType.entity';
import { Repository } from 'typeorm';

export class CreateMessageTypeService {
  constructor(
    @Inject('MESSAGE_TYPE_REPOSITORY')
    private messageRepository: Repository<MessageType>,
  ) {}
  async execute(data: CreateMessageTypeRequestDTO) {
    const messageType = this.messageRepository.create(data);
    await this.messageRepository.save(messageType);
    return messageType;
  }
}
