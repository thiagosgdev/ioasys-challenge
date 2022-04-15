import {
  Controller,
  Delete,
  HttpException,
  Param,
  Request,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { DeleteEventService } from './deleteEvent.service';

@ApiTags('events')
@Controller()
export class DeleteEventController {
  constructor(private deleteEventService: DeleteEventService) {}

  @Delete()
  @ApiOkResponse({
    description: 'Event deleted.',
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Param('eventId') eventId: string,
  ) {
    try {
      const userId = req.user.userId;
      return await this.deleteEventService.execute(userId, eventId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
