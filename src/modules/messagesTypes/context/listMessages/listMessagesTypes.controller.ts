import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListMessagesTypesService } from 'src/modules/messagesTypes/context/listMessages/listMessagesTypes.service';

@ApiTags('messages')
@Controller('/types')
export class ListMessagesTypesController {
  constructor(private listMessagesTypesService: ListMessagesTypesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of messages will be returned',
  })
  public async handle() {
    try {
      return await this.listMessagesTypesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
