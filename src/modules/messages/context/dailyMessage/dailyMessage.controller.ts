import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { MessageResponseDTO } from '../../../../shared/dtos/messages/message.dto';
import { DailyMessageService } from './dailyMessage.service';

@ApiTags('messages')
@Controller('/daily')
export class DailyMessageController {
  constructor(private dailyMessageService: DailyMessageService) {}

  @Get()
  @ApiOkResponse({
    description: 'Return a daily message',
    type: MessageResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.dailyMessageService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
