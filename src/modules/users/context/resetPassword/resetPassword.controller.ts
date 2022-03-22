import {
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';

@Controller('/users')
export class ResetPasswordController {
  constructor(
    private resetPasswordService: ResetPasswordService,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  @Get('/resetpassword')
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
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
  public async handle(@Body() email: string) {
    try {
      //  await this.cacheManager.set('1234', 'abcde');
      //  return await this.cacheManager.get('1234');
      return await this.resetPasswordService.execute(email);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
