import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MessageResponseDTO } from '../../../../shared/dtos/messages/message.dto';
import { Message } from '../../../../shared/entities/message.entity';

export class ListMessagesService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(): Promise<MessageResponseDTO[]> {
    return await this.messageRepository.find();
  }
}
