import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MessageResponseDTO } from '../../../../shared/dtos/messages/message.dto';
import { Message } from '../../../../shared/entities/message.entity';

export class DailyMessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(): Promise<MessageResponseDTO> {
    const messages = await this.messageRepository.find();
    let rand = Math.random();
    rand = Math.floor(rand * messages.length);
    return messages[rand];
  }
}
