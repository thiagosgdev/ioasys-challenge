import { Body, Controller, HttpException, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from '../../../../shared/dtos/events/eventAddressResponse.dto';
import { UpdateEventRequestDTO } from '../../../../shared/dtos/events/updateEventRequest.dto';
import { UpdateEventService } from './updateEvent.service';

@ApiTags('events')
@Controller()
export class UpdateEventController {
  constructor(private updateEventService: UpdateEventService) {}

  @Patch()
  @ApiOkResponse({
    description: 'Return the event and/or adress updated.',
    type: EventAddressResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(@Body() data: UpdateEventRequestDTO) {
    try {
      return await this.updateEventService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
