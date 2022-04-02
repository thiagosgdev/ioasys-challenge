import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { RefreshService } from 'src/modules/users/context/refresh/refresh.service';

@ApiTags('users')
@Controller('/refresh')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Post()
  @ApiOkResponse({
    description: 'A token will be returned.',
  })
  @ApiUnauthorizedResponse({
    description: 'The refresh token is invalid!',
  })
  public async handle(@Body('refreshToken') refreshToken: string) {
    try {
      return await this.refreshService.execute(refreshToken);
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message,
          code: 'token.invalid',
        },
        error.response.statusCode,
      );
    }
  }
}
