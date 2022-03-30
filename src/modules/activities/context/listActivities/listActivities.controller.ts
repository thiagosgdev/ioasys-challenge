import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListActivitiesService } from './listActivities.service';

@ApiTags('activities')
@Controller('/activities')
export class ListActivitiesController {
  constructor(private listActivitiesService: ListActivitiesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of activities will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listActivitiesService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
