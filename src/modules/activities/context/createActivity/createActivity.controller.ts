import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateActivityRequestDTO } from 'src/shared/dtos/activities/createActivityRequest.dto';
import { CreateActivityService } from 'src/modules/activities/context/createActivity/createActivity.service';
import { ActivityResponse } from 'src/shared/dtos/activities/activity.dto';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

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
