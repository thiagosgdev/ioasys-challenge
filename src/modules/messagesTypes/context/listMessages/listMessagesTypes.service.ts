import { Inject } from '@nestjs/common';
import { MessageType } from 'src/shared/entities/messageType.entity';
import { Repository } from 'typeorm';

export class ListMessagesTypesService {
  constructor(
    @Inject('MESSAGE_TYPE_REPOSITORY')
    private messageRepository: Repository<MessageType>,
  ) {}
  async execute() {
    return await this.messageRepository.find();
  }
}
