import { Controller, Get, HttpException, Param } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { FindUserByEmailService } from 'src/modules/users/context/findUserByEmail/findUserByEmail.service';
import { UserDTO } from 'src/shared/dtos/users/user.dto';

@ApiTags('users')
@Controller('/find/:email')
export class FindUserByEmailController {
  constructor(private findUserByEmailService: FindUserByEmailService) {}

  @Get()
  @ApiParam({
    name: 'email',
    example: 'test@test.com',
    required: true,
  })
  @ApiOkResponse({
    description: 'Return the user found',
    type: UserDTO,
  })
  @ApiNotFoundResponse({
    description: 'No user found!',
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
