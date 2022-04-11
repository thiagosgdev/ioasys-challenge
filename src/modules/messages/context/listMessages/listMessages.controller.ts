import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListMessagesService } from 'src/modules/messages/context/listMessages/listMessages.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { MessageResponseDTO } from 'src/shared/dtos/messages/message.dto';

@Controller()
export class ListMessagesController {
  constructor(private listMessagesService: ListMessagesService) {}

  @Get('/list')
  @ApiTags('messages')
  @ApiOkResponse({
    description: 'A list of messages will be returned',
    type: MessageResponseDTO,
  })
  @ApiCommomDecorators()
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
