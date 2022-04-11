import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListDisabilitiesService } from 'src/modules/disabilities/context/listDisabilities/listDisabilities.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { DisabilitiesResponse } from 'src/shared/dtos/disabilities/disabilitiesResponse.dto';

@ApiTags('disabilities')
@Controller()
export class ListDisabilitiesController {
  constructor(private listDisabilitiesService: ListDisabilitiesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of disabilities will be returned',
    type: DisabilitiesResponse,
  })
  @ApiCommomDecorators()
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
