import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListActivitiesCategoriesService } from 'src/modules/activitiesCategories/context/listActivitiesCategories/listActivitiesCategories.service';

@ApiTags('activities')
@Controller('/categories')
export class ListActivitiesCategoriesController {
  constructor(
    private listActivitiesCategoriesService: ListActivitiesCategoriesService,
  ) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of activities categories will be returned',
  })
  public async handle() {
    try {
      await this.listActivitiesCategoriesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
