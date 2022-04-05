import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserDisabilitiesService } from 'src/modules/usersDisabilities/context/listUserDisabilities/listUserDisabilities.service';

@ApiTags('users')
@Controller('/disabilities')
export class ListUserDisabilitiesController {
  constructor(
    private listUserDisabilitiesService: ListUserDisabilitiesService,
  ) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of the user disabilities will be returned',
  })
  public async handle() {
    try {
      return await this.listUserDisabilitiesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
