import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListActivitiesService } from 'src/modules/activities/context/listActivities/listActivities.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { ActivityResponse } from 'src/shared/dtos/activities/activity.dto';

@ApiTags('activities')
@Controller()
export class ListActivitiesController {
  constructor(private listActivitiesService: ListActivitiesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of activities will be returned',
    type: ActivityResponse,
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listActivitiesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
