import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserDisabilitiesByUserIdService } from './listUserDisabilitiesByUserId.service';

@ApiTags('users')
@Controller('/disabilities')
export class ListUserDisabilitiesByUserIdController {
  constructor(
    private listUserDisabilitiesByUserIdService: ListUserDisabilitiesByUserIdService,
  ) {}

  @Get('/list/:userId')
  @ApiOkResponse({
    description: 'A list of the user disabilities will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return await this.listUserDisabilitiesByUserIdService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
