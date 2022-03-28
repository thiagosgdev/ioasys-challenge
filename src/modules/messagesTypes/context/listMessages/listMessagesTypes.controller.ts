import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { ListMessagesTypesService } from 'src/modules/messagesTypes/context/listMessages/listMessagesTypes.service';

@Controller('/messages')
export class ListMessagesTypesController {
  constructor(private listMessagesTypesService: ListMessagesTypesService) {}

  @Get('/types/list')
  @HttpCode(HttpStatus.OK)
  @ApiTags('messages')
  @ApiOkResponse({
    description: 'A list of messages will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listMessagesTypesService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
