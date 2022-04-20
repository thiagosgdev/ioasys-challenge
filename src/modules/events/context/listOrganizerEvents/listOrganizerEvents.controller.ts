import { Controller, Get, HttpException, Query, Request } from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventResponseDTO } from '../../../../shared/dtos/events/event.dto';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';
import { ListOrganizerEventsService } from './listOrganizerEvents.service';
import { QueryFiltersRequest } from 'src/shared/dtos/shared/queryFilters.dto';

@ApiTags('events')
@Controller('/organizer')
export class ListOrganizerEventsController {
  constructor(private listOrganizerEventsService: ListOrganizerEventsService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of the organizer events will be returned',
    type: EventResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Query() data?: QueryFiltersRequest,
  ) {
    try {
      return await this.listOrganizerEventsService.execute(
        req.user.userId,
        data,
      );
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
