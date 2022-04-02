import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserInterestsService } from 'src/modules/userInterests/context/listUserInterests/listUserInterests.service';

@ApiTags('users')
@Controller('/interests')
export class ListUserInterestsController {
  constructor(private listUserInterestsService: ListUserInterestsService) {}

  @Get('/:userId')
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return await this.listUserInterestsService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
