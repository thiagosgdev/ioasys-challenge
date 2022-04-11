import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateMessageTypeRequestDTO } from 'src/shared/dtos/messagesTypes/createMessageTypeRequest.dto';
import { CreateMessageTypeService } from 'src/modules/messagesTypes/context/createMessageType/createMessageType.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { MessageTypeResponseDTO } from 'src/shared/dtos/messagesTypes/messageType.dto';

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
