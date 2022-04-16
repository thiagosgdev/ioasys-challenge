import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Public } from '../../../../shared/decorators/public.decorator';
import { ResetPasswordService } from './resetPassword.service';

@ApiTags('users')
@Controller('/resetpassword')
export class ResetPasswordController {
  constructor(private resetPasswordService: ResetPasswordService) {}

  @Public()
  @Patch()
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'test@test.com',
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  @ApiNotFoundResponse({
    description: 'No user was found with the e-mail provided',
  })
  public async handle(@Body('email') email: string) {
    try {
      return await this.resetPasswordService.execute(email);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
