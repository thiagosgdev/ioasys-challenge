import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateMessageRequestDTO } from '../../../../shared/dtos/messages/createMessageRequest.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { MessageResponseDTO } from '../../../../shared/dtos/messages/message.dto';
import { CreateMessageService } from './createMessage.service';

@ApiTags('messages')
@Controller()
export class CreateMessageController {
  constructor(private createMessageService: CreateMessageService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The message created will be returned',
    type: MessageResponseDTO,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(@Body() data: CreateMessageRequestDTO) {
    try {
      return await this.createMessageService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
