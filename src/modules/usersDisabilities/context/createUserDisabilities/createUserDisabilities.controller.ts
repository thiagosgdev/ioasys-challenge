import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDisabilityRequestDTO } from 'src/shared/dtos/userDisabilities/createUserDisabilitiesRequest.dto';

import { CreateUserDisabilitiesService } from './createUserDisabilities.service';

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
  public async handle(@Body() data: CreateUserDisabilityRequestDTO) {
    try {
      return await this.createUserDisabilitiesService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
