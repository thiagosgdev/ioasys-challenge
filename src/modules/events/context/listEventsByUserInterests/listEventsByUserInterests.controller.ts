import { Controller, Get, HttpException, Param, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListEventsByUserInterestsService } from 'src/modules/events/context/listEventsByUserInterests/listEventsByUserInterests.service';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';

@ApiTags('events')
@Controller()
export class ListEventsByUserInterestsController {
  constructor(
    private listEventsByUserInterestsService: ListEventsByUserInterestsService,
  ) {}

  @Get('/list/user')
  @ApiOkResponse({
    description: 'A list of events by user interests will be returned',
  })
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
