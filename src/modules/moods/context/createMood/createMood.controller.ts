import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateMoodRequestDTO } from 'src/shared/dtos/moods/createMoodRequest.dto';
import { CreateMoodService } from './createMood.service';

@Controller('/moods')
export class CreateMoodController {
  constructor(private createMoodService: CreateMoodService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiTags('moods')
  @ApiCreatedResponse({
    description: 'The mood created will be returned',
  })
  public async handle(@Body() data: CreateMoodRequestDTO) {
    try {
      return instanceToInstance(await this.createMoodService.execute(data));
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
