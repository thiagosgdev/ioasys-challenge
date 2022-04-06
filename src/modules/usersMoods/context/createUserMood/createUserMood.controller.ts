import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { JwtAuthGuard } from 'src/shared/providers/EncryptProvider/jwtAuth.guard';
import { CreateUserMoodService } from './createUserMood.service';

@ApiTags('users')
@Controller('/moods')
export class CreateUserMoodController {
  constructor(private createUserMoodService: CreateUserMoodService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse({
    description: 'The user mood created will be returned',
  })
  public async handle(@Body() data: CreateUserMoodRequestDTO, @Request() req) {
    try {
      const userId = req.user.userId;
      return await this.createUserMoodService.execute(userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
