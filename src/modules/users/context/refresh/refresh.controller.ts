import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { RefreshService } from './refresh.service';

@ApiTags('users')
@Controller('/users')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Post('/refresh')
  @ApiOkResponse({
    description: 'A token will be returned.',
  })
  @ApiUnauthorizedResponse({
    description: 'The token is invalid!',
  })
  public async handle(@Body('refreshToken') refreshToken: string) {
    try {
      return instanceToInstance(
        await this.refreshService.execute(refreshToken),
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
