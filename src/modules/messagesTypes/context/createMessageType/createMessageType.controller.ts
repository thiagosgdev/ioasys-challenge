import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateMessageTypeRequestDTO } from 'src/shared/dtos/messagesTypes/createMessageTypeRequest.dto';

import { CreateMessageTypeService } from './createMessageType.service';

@Controller('/messages')
export class CreateMessageTypeController {
  constructor(private createMessageTypeService: CreateMessageTypeService) {}

  @Post('/types')
  @HttpCode(HttpStatus.OK)
  @ApiTags('messages')
  @ApiOkResponse({
    description: 'Return the message type created.',
  })
  public async handle(@Body() data: CreateMessageTypeRequestDTO) {
    try {
      return instanceToInstance(
        await this.createMessageTypeService.execute(data),
      );
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
