import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListMessagesService } from 'src/modules/messages/context/listMessages/listMessages.service';

@Controller('/messages')
export class ListMessagesController {
  constructor(private listMessagesService: ListMessagesService) {}

  @Get('/list')
  @ApiTags('messages')
  @ApiOkResponse({
    description: 'A list of messages will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listMessagesService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
