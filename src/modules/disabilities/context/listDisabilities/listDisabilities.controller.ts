import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListDisabilitiesService } from 'src/modules/disabilities/context/listDisabilities/listDisabilities.service';

@ApiTags('disabilities')
@Controller()
export class ListDisabilitiesController {
  constructor(private listDisabilitiesService: ListDisabilitiesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of disabilities will be returned',
  })
  public async handle() {
    try {
      return await this.listDisabilitiesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
