import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateEventRequestDTO } from '../../../../shared/dtos/events/createEventRequest.dto';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from '../../../../shared/dtos/events/eventAddressResponse.dto';
import { CreateEventService } from './createEvent.service';

@ApiTags('events')
@Controller()
export class CreateEventController {
  constructor(private createEventService: CreateEventService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the event and adress created.',
    type: EventAddressResponseDTO,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Body() data: CreateEventRequestDTO,
  ) {
    try {
      return await this.createEventService.execute(req.user, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
