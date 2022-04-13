import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from '../../../../shared/dtos/events/eventAddressResponse.dto';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ListEventsByUserInterestsService } from './listEventsByUserInterests.service';

@ApiTags('events')
@Controller()
export class ListEventsByUserInterestsController {
  constructor(
    private listEventsByUserInterestsService: ListEventsByUserInterestsService,
  ) {}

  @Get('/list/user')
  @ApiOkResponse({
    description: 'A list of events by user interests will be returned',
    type: EventAddressResponseDTO,
  })
  @ApiNotFoundResponse({
    description: 'No event was found',
  })
  @ApiCommomDecorators()
  public async handle(@Request() req: RequestDTO) {
    try {
      const userId = req.user.userId;
      return await this.listEventsByUserInterestsService.execute(userId);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
