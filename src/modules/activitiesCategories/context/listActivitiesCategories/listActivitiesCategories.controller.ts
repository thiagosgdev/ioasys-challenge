import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListActivitiesCategoriesService } from './listActivitiesCategories.service';

@ApiTags('activities')
@Controller('/activities/categories')
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
      return instanceToInstance(
        await this.listActivitiesCategoriesService.execute(),
      );
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
