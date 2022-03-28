import { Inject } from '@nestjs/common';
import { MessageResponse } from 'src/shared/dtos/messages/message.dto';
import { Message } from 'src/shared/entities/message.entity';
import { Repository } from 'typeorm';

export class ListMessagesService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(): Promise<MessageResponse[]> {
    return await this.messageRepository.find();
  }
}
