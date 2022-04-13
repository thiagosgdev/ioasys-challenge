import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateActivityRequestDTO } from '../../../../shared/dtos/activities/createActivityRequest.dto';
import { ActivityResponse } from '../../../../shared/dtos/activities/activity.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { CreateActivityService } from './createActivity.service';

@ApiTags('activities')
@Controller()
export class CreateActivityController {
  constructor(private createActivityService: CreateActivityService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity created will be returned',
    type: ActivityResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
  public async handle(@Body() data: CreateActivityRequestDTO) {
    try {
      return await this.createActivityService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
