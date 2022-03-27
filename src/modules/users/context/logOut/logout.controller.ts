import {
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { LogoutService } from './logout.service';

@Controller('/users')
export class LogoutController {
  constructor(private logoutService: LogoutService) {}

  @Get('/logout')
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
  public async handle(@Headers('Authorization') auth: string) {
    try {
      const token = auth.split(' ')[1];
      await this.logoutService.logout(token);
    } catch (error) {
      throw new HttpException(error.message, error.response);
    }
  }
}
