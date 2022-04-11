import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateMoodRequestDTO } from 'src/shared/dtos/moods/createMoodRequest.dto';
import { CreateMoodService } from 'src/modules/moods/context/createMood/createMood.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { MoodResponseDTO } from 'src/shared/dtos/moods/mood.dto';

@ApiTags('moods')
@Controller()
export class CreateMoodController {
  constructor(private createMoodService: CreateMoodService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The mood created will be returned',
    type: MoodResponseDTO,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
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
