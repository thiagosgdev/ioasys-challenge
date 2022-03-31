import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';
import { CreateEventService } from './createEvent.service';

@ApiTags('events')
@Controller('/events')
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  @Post()
  @ApiOkResponse({
    description: 'Return the event created.',
  })
  public async handle(@Body() data: CreateEventRequestDTO) {
    try {
      return instanceToInstance(await this.createEventService.execute(data));
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
