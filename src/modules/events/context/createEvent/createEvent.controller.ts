import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';
import { CreateEventService } from 'src/modules/events/context/createEvent/createEvent.service';

@ApiTags('events')
@Controller()
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the event and adress created.',
  })
  public async handle(@Body() data: CreateEventRequestDTO) {
    try {
      return await this.createEventService.execute(data);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
