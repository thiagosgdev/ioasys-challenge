import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListMessagesTypesService } from 'src/modules/messagesTypes/context/listMessages/listMessagesTypes.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { MessageTypeResponseDTO } from 'src/shared/dtos/messagesTypes/messageType.dto';

@ApiTags('messages')
@Controller('/types')
export class ListMessagesTypesController {
  constructor(private listMessagesTypesService: ListMessagesTypesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of message types will be returned',
    type: MessageTypeResponseDTO,
  })
  @ApiCommomDecorators()
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
