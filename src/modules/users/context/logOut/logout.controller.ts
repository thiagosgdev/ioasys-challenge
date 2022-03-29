import {
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LogoutService } from './logout.service';

@ApiTags('users')
@Controller('/users')
export class LogoutController {
  constructor(private logoutService: LogoutService) {}

  @Get('/logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async handle(@Headers('Authorization') auth: string) {
    try {
      const token = auth.split(' ')[1];
      await this.logoutService.logout(token);
    } catch (error) {
      throw new HttpException(error.message, error.response);
    }
  }
}
