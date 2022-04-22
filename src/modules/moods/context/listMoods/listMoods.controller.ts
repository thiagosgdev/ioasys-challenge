import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { MoodResponseDTO } from '../../../../shared/dtos/moods/mood.dto';
import { ListMoodsService } from './listMoods.service';

@ApiTags('moods')
@Controller()
export class ListMoodsController {
  constructor(private listMoodsService: ListMoodsService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of moods will be returned',
    type: MoodResponseDTO,
  })
  @ApiCommomDecorators()
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
