import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDisabilityRequestDTO } from 'src/shared/dtos/userDisabilities/createUserDisabilitiesRequest.dto';
import { CreateUserDisabilitiesService } from 'src/modules/usersDisabilities/context/createUserDisabilities/createUserDisabilities.service';

@ApiTags('users')
@Controller()
export class CreateUserDisabilitiesController {
  constructor(
    private createUserDisabilitiesService: CreateUserDisabilitiesService,
  ) {}

  @Post('/disabilities')
  @ApiCreatedResponse({
    description: 'The user disability created will be returned',
  })
  public async handle(
    @Body() data: CreateUserDisabilityRequestDTO,
    @Request() req,
  ) {
    try {
      const userId = req.user.userId;
      return await this.createUserDisabilitiesService.execute(userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
