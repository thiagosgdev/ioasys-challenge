import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateMessageRequestDTO } from 'src/shared/dtos/messages/createMessageRequest.dto';
import { Message } from 'src/shared/entities/message.entity';

export class CreateMessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private messageRepository: Repository<Message>,
  ) {}
  async execute(data: CreateMessageRequestDTO) {
    return await this.messageRepository.save(data);
  }
}
