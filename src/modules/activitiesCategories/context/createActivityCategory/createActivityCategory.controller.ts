import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateActivityCategoryRequestDTO } from 'src/shared/dtos/activitiesCategories/createActivityCategoryRequest.dto';
import { CreateActivityCategoryService } from 'src/modules/activitiesCategories/context/createActivityCategory/createActivityCategory.service';

@ApiTags('activities')
@Controller('/activities/categories')
export class CreateActivityCategoryController {
  constructor(
    private createActivityCategoryService: CreateActivityCategoryService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity category created will be returned',
  })
  public async handle(@Body() data: CreateActivityCategoryRequestDTO) {
    try {
      return instanceToInstance(
        await this.createActivityCategoryService.execute(data),
      );
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
