import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { MessageResponseDTO } from 'src/shared/dtos/messages/message.dto';
import { Message } from 'src/shared/entities/message.entity';

export class DailyMessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(): Promise<MessageResponseDTO> {
    const messages = await this.messageRepository.find();
    let rand = Math.random();
    console.log(rand);
    rand = Math.floor(rand * messages.length);
    console.log(rand);
    return messages[rand];
  }
}
