import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';

import { RefreshTokenDTO } from '../../../../shared/dtos/users/refreshToken.dto';
import { RefreshTokenResponseDTO } from '../../../../shared/dtos/users/refreshTokenResponse.dto';
import { Public } from '../../../../shared/decorators/public.decorator';
import { RefreshService } from './refresh.service';

@ApiTags('users')
@Controller('/refresh')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Public()
  @Post()
  @ApiBody({
    description: 'Refresh token',
    required: true,
    type: RefreshTokenDTO,
  })
  @ApiOkResponse({
    description: 'A token will be returned.',
    type: RefreshTokenResponseDTO,
  })
  @ApiTooManyRequestsResponse({
    description:
      'Too many request. Please wait a while before making more requests!',
  })
  @ApiInternalServerErrorResponse({
    description: 'Something went wrong. Please contact the API support',
  })
  public async handle(@Body('refreshToken') refreshToken: string) {
    try {
      return await this.refreshService.execute(refreshToken);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
