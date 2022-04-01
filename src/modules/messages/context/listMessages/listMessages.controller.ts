import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListMessagesService } from 'src/modules/messages/context/listMessages/listMessages.service';

@Controller()
export class ListMessagesController {
  constructor(private listMessagesService: ListMessagesService) {}

  @Get('/list')
  @ApiTags('messages')
  @ApiOkResponse({
    description: 'A list of messages will be returned',
  })
  public async handle() {
    try {
      return await this.listMessagesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
