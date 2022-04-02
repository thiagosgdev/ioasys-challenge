import {
  Controller,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LogoutService } from 'src/modules/users/context/logOut/logout.service';

@ApiTags('users')
@Controller('/logout')
export class LogoutController {
  constructor(private logoutService: LogoutService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  public async handle(@Headers('Authorization') auth: string) {
    try {
      const token = auth.split(' ')[1];
      await this.logoutService.logout(token);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
