import { Inject } from '@nestjs/common';
import { CreateMessageRequestDTO } from 'src/shared/dtos/messages/createMessageRequest.dto';
import { Message } from 'src/shared/entities/message.entity';
import { Repository } from 'typeorm';

export class CreateMessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(data: CreateMessageRequestDTO) {
    const message = this.messageRepository.create(data);
    await this.messageRepository.save(message);
    return message;
  }
}
