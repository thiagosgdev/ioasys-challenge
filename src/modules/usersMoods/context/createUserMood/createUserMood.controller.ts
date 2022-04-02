import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { CreateUserMoodService } from './createUserMood.service';

@ApiTags('users')
@Controller('/moods')
export class CreateUserMoodController {
  constructor(private createUserMoodService: CreateUserMoodService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The user mood created will be returned',
  })
  public async handle(@Body() data: CreateUserMoodRequestDTO) {
    try {
      return await this.createUserMoodService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
