import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListActivitiesService } from './listActivities.service';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { ActivityResponse } from '../../../../shared/dtos/activities/activity.dto';
import { Public } from 'src/shared/decorators/public.decorator';

@Public()
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
