import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateEventRequestDTO } from 'src/shared/dtos/events/createEventRequest.dto';
import { CreateEventService } from 'src/modules/events/context/createEvent/createEvent.service';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';

@ApiTags('events')
@Controller()
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the event and adress created.',
  })
  public async handle(
    @Request() req: RequestDTO,
    @Body() data: CreateEventRequestDTO,
  ) {
    try {
      const user = req.user;
      return await this.createEventService.execute(user, data);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
