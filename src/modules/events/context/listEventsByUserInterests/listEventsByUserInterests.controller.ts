import { Controller, Get, HttpException, Query, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { QueryFiltersRequest } from '../../../../shared/dtos/shared/queryFilters.dto';
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
    type: [EventAddressResponseDTO],
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Query() filters?: QueryFiltersRequest,
  ) {
    try {
      return await this.listEventsByUserInterestsService.execute(
        req.user,
        filters,
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
