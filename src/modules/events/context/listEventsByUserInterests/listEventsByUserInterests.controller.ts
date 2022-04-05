import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListEventsByUserInterestsService } from 'src/modules/events/context/listEventsByUserInterests/listEventsByUserInterests.service';

@ApiTags('events')
@Controller()
export class ListEventsByUserInterestsController {
  constructor(
    private listEventsByUserInterestsService: ListEventsByUserInterestsService,
  ) {}

  @Get('/list/user/:userId')
  @ApiOkResponse({
    description: 'A list of events by user interests will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
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
