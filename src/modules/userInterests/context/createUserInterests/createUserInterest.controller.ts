import {
  Body,
  Controller,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserInterestRequestDTO } from 'src/shared/dtos/userInterest/createUserInterestRequest.dto';
import { CreateUserInterestService } from 'src/modules/userInterests/context/createUserInterests/createUserInterest.service';
import { JwtAuthGuard } from 'src/shared/providers/EncryptProvider/jwtAuth.guard';

@ApiTags('users')
@Controller()
export class CreateUserInterestController {
  constructor(private createUserInterestService: CreateUserInterestService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/interests')
  @ApiCreatedResponse({
    description: 'The user interest created will be returned',
  })
  public async handle(
    @Body() data: CreateUserInterestRequestDTO,
    @Request() req,
  ) {
    try {
      const userId = req.user.userId;
      return await this.createUserInterestService.execute(userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
