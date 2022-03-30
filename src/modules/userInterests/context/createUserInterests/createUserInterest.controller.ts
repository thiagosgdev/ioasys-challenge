import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateUserInterestRequestDTO } from 'src/shared/dtos/userInterest/createUserInterestRequest.dto';
import { CreateUserInterestService } from 'src/modules/userInterests/context/createUserInterests/createUserInterest.service';

@ApiTags('users')
@Controller('/users')
export class CreateUserInterestController {
  constructor(private createUserInterestService: CreateUserInterestService) {}

  @Post('/interests')
  @ApiCreatedResponse({
    description: 'The user interest created will be returned',
  })
  public async handle(@Body() data: CreateUserInterestRequestDTO) {
    try {
      return instanceToInstance(
        await this.createUserInterestService.execute(data),
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
