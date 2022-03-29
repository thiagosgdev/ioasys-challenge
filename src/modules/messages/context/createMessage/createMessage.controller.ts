import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateMessageRequestDTO } from 'src/shared/dtos/messages/createMessageRequest.dto';
import { CreateMessageService } from 'src/modules/messages/context/createMessage/createMessage.service';

@Controller('/messages')
export class CreateMessageController {
  constructor(private createMessageService: CreateMessageService) {}

  @Post()
  @ApiTags('messages')
  @ApiCreatedResponse({
    description: 'The message created will be returned',
  })
  public async handle(@Body() data: CreateMessageRequestDTO) {
    try {
      return instanceToInstance(await this.createMessageService.execute(data));
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
