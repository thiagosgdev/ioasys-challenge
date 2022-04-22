import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateMessageTypeRequestDTO } from '../../../../shared/dtos/messagesTypes/createMessageTypeRequest.dto';
import { MessageType } from '../../../../shared/entities/messageType.entity';

export class CreateMessageTypeService {
  constructor(
    @Inject('MESSAGE_TYPE_REPOSITORY')
    private messageRepository: Repository<MessageType>,
  ) {}
  async execute(data: CreateMessageTypeRequestDTO) {
    return await this.messageRepository.save(data);
  }
}
