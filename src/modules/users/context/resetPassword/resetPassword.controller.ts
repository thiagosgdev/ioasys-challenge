import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';

@ApiTags('users')
@Controller('/users')
export class ResetPasswordController {
  constructor(private resetPasswordService: ResetPasswordService) {}

  @Patch('/resetpassword')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'A email will be sent to the user.',
    schema: {
      example: 'test@test.com',
    },
  })
  @ApiBadRequestResponse({
    description:
      'This will be returned when has validation error or no user is found',
  })
  public async handle(@Body('email') email: string) {
    try {
      await this.resetPasswordService.execute(email);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
