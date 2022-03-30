import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { CreateActivityRequestDTO } from 'src/shared/dtos/activities/createActivityRequest.dto';
import { CreateActivityService } from './createActivity.service';

@ApiTags('activities')
@Controller('/activities')
export class CreateActivityController {
  constructor(private createActivityService: CreateActivityService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity created will be returned',
  })
  public async handle(@Body() data: CreateActivityRequestDTO) {
    try {
      return instanceToInstance(await this.createActivityService.execute(data));
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
