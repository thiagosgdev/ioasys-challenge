import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { FindUserByEmailService } from './findUserByEmail.service';

@ApiTags('users')
@Controller('/users')
export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  @Get('/find')
  @ApiOkResponse({
    description: 'Return the user found',
  })
  public async handle(@Query('email') email: string) {
    try {
      if (!email) throw new BadRequestException('No email provided!');
      return instanceToInstance(
        await this.findUserByEmailService.execute(email),
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
