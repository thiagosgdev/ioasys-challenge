import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserInterestsByUserIdService } from 'src/modules/userInterests/context/listUserInterestsByUserId/listUserInterestsByUserId.service';

@ApiTags('users')
@Controller('/interests')
export class ListUserInterestsByUserIdController {
  constructor(
    private listUserInterestsByUserIdService: ListUserInterestsByUserIdService,
  ) {}

  @Get('/list/:userId')
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return await this.listUserInterestsByUserIdService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
