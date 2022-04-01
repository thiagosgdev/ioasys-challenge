import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListMoodsService } from 'src/modules/moods/context/listMoods/listMoods.service';

@ApiTags('moods')
@Controller()
export class ListMoodsController {
  constructor(private listMoodsService: ListMoodsService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of moods will be returned',
  })
  public async handle() {
    try {
      return await this.listMoodsService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
