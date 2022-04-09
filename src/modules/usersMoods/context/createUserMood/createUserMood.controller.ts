import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';

import { CreateUserMoodService } from 'src/modules/usersMoods/context/createUserMood/createUserMood.service';
import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { UserMood } from 'src/shared/entities/userMoods.entity';

@ApiTags('users')
@Controller('/moods')
export class CreateUserMoodController {
  constructor(private createUserMoodService: CreateUserMoodService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The user mood created will be returned',
    type: UserMood,
  })
  public async handle(
    @Body() data: CreateUserMoodRequestDTO,
    @Request() req: RequestDTO,
  ) {
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
