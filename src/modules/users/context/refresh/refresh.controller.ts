import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Public } from '../../../../shared/decorators/public.decorator';
import { RefreshService } from './refresh.service';

@ApiTags('users')
@Controller('/refresh')
export class RefreshController {
  constructor(private refreshService: RefreshService) {}

  @Public()
  @Post()
  @ApiOkResponse({
    description: 'A token will be returned.',
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
