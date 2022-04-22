import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateActivityCategoryRequestDTO } from '../../../../shared/dtos/activitiesCategories/createActivityCategoryRequest.dto';
import { ActivityCategoryResponse } from '../../../../shared/dtos/activitiesCategories/activityCategory.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { CreateActivityCategoryService } from './createActivityCategory.service';

@ApiTags('activities')
@Controller('/categories')
export class CreateActivityCategoryController {
  constructor(
    private createActivityCategoryService: CreateActivityCategoryService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity category created will be returned',
    type: ActivityCategoryResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(@Body() data: CreateActivityCategoryRequestDTO) {
    try {
      return await this.createActivityCategoryService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
