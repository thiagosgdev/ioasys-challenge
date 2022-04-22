import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MessageType } from '../../../../shared/entities/messageType.entity';

export class ListMessagesTypesService {
  constructor(
    @Inject('MESSAGE_TYPE_REPOSITORY')
    private messageRepository: Repository<MessageType>,
  ) {}
  async execute() {
    return await this.messageRepository.find();
  }
}
