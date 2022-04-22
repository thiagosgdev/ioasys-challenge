import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { MessageResponseDTO } from '../../../../shared/dtos/messages/message.dto';
import { ListMessagesService } from './listMessages.service';

@ApiTags('messages')
@Controller()
export class ListMessagesController {
  constructor(private listMessagesService: ListMessagesService) {}

  @Get('/list')
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
