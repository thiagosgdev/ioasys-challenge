import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Public } from 'src/shared/decorators/public.decorator';
import { WellnessTipsResponseDTO } from 'src/shared/dtos/wellness/wellnessResponse';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { ListWellnessTipsService } from './listWellnessTips.service';

@ApiTags('wellness')
@Controller('/list')
export class ListWellnessTipsController {
  constructor(private listWellnessTipsService: ListWellnessTipsService) {}

  @Public()
  @Get()
  @ApiOkResponse({
    description: 'A list wellness tips will be returned',
    type: WellnessTipsResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listWellnessTipsService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
