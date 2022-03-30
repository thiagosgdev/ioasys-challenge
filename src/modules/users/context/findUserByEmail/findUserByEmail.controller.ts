import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  Param,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { FindUserByEmailService } from './findUserByEmail.service';

@ApiTags('users')
@Controller('/users')
export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  @Get('/:email')
  @ApiOkResponse({
    description: 'Return the user found',
  })
  public async handle(@Param('email') email: string) {
    try {
      if (!email) throw new BadRequestException('No user found!');
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
