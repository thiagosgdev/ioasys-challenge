import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserInterestsService } from 'src/modules/userInterests/context/listUserInterests/listUserInterests.service';

@ApiTags('users')
@Controller('/interests')
export class ListUserInterestsController {
  constructor(private listUserInterestsService: ListUserInterestsService) {}

  @Get('/list/all')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
  })
  public async handle() {
    try {
      return await this.listUserInterestsService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
