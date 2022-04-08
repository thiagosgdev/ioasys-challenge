import { Body, Controller, HttpException, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UpdateEventRequestDTO } from 'src/shared/dtos/events/updateEventRequest.dto';
import { UpdateEventService } from './updateEvent.service';

@ApiTags('events')
@Controller()
export class UpdateEventController {
  constructor(private updateEventService: UpdateEventService) {}

  @Patch()
  @ApiOkResponse({
    description: 'Return the event and/or adress updated.',
  })
  public async handle(@Body() data: UpdateEventRequestDTO) {
    try {
      return await this.updateEventService.execute(data);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
