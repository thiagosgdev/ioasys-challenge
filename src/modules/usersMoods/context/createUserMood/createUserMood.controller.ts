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

import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { CreateUserMoodService } from './createUserMood.service';

@Controller('/users')
export class CreateUserMoodController {
  constructor(private createUserMoodService: CreateUserMoodService) {}

  @Post('/moods')
  @HttpCode(HttpStatus.CREATED)
  @ApiTags('users')
  @ApiCreatedResponse({
    description: 'The user mood created will be returned',
  })
  public async handle(@Body() data: CreateUserMoodRequestDTO) {
    try {
      return instanceToInstance(await this.createUserMoodService.execute(data));
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
