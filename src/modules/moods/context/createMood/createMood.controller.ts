import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateMoodRequestDTO } from 'src/shared/dtos/moods/createMoodRequest.dto';
import { CreateMoodService } from 'src/modules/moods/context/createMood/createMood.service';

@ApiTags('moods')
@Controller()
export class CreateMoodController {
  constructor(private createMoodService: CreateMoodService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The mood created will be returned',
  })
  public async handle(@Body() data: CreateMoodRequestDTO) {
    try {
      return await this.createMoodService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
