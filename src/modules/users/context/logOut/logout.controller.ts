import {
  Controller,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { LogoutService } from './logout.service';

@ApiTags('users')
@Controller('/logout')
export class LogoutController {
  constructor(private logoutService: LogoutService) {}

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiCommomDecorators()
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
