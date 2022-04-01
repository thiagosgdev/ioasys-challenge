import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateActivityRequestDTO } from 'src/shared/dtos/activities/createActivityRequest.dto';
import { CreateActivityService } from 'src/modules/activities/context/createActivity/createActivity.service';

@ApiTags('activities')
@Controller()
export class CreateActivityController {
  constructor(private createActivityService: CreateActivityService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity created will be returned',
  })
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
