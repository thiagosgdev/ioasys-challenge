import { Controller, Get, HttpException, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { FindUserByEmailService } from 'src/modules/users/context/findUserByEmail/findUserByEmail.service';

@ApiTags('users')
@Controller('/find/:email')
export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  @Get()
  @ApiOkResponse({
    description: 'Return the user found',
  })
  public async handle(@Param('email') email: string) {
    try {
      return await this.findUserByEmailService.execute(email);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
