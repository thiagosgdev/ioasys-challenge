import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserMoodRequestDTO } from '../../../../shared/dtos/userMood/createUserMoodRequest.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserMoodResponseDTO } from '../../../../shared/dtos/userMood/userMood.dto';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { CreateUserMoodService } from './createUserMood.service';

@ApiTags('users')
@Controller('/moods')
export class CreateUserMoodController {
  constructor(private createUserMoodService: CreateUserMoodService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The user mood created will be returned',
    type: UserMoodResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(
    @Body() data: CreateUserMoodRequestDTO,
    @Request() req: RequestDTO,
  ) {
    try {
      return await this.createUserMoodService.execute(req.user.userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
