import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateMessageTypeRequestDTO } from '../../../../shared/dtos/messagesTypes/createMessageTypeRequest.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { MessageTypeResponseDTO } from '../../../../shared/dtos/messagesTypes/messageType.dto';
import { CreateMessageTypeService } from './createMessageType.service';

@ApiTags('messages')
@Controller('/types')
export class CreateMessageTypeController {
  constructor(private createMessageTypeService: CreateMessageTypeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the message type created.',
    type: MessageTypeResponseDTO,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(@Body() data: CreateMessageTypeRequestDTO) {
    try {
      return await this.createMessageTypeService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
