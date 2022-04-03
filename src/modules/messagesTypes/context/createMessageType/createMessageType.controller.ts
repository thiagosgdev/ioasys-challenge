import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateMessageTypeRequestDTO } from 'src/shared/dtos/messagesTypes/createMessageTypeRequest.dto';
import { CreateMessageTypeService } from 'src/modules/messagesTypes/context/createMessageType/createMessageType.service';

@ApiTags('messages')
@Controller('/types')
export class CreateMessageTypeController {
  constructor(private createMessageTypeService: CreateMessageTypeService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the message type created.',
  })
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
