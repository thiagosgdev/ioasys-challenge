import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Public } from 'src/shared/decorators/public.decorator';
import { QueryFiltersRequest } from 'src/shared/dtos/shared/queryFilters.dto';
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
  public async handle(@Query() data: QueryFiltersRequest) {
    try {
      return await this.listWellnessTipsService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
