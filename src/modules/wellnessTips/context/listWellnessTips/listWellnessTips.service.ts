import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { QueryFiltersRequest } from '../../../../shared/dtos/shared/queryFilters.dto';
import { WellnessTip } from '../../../../shared/entities/wellnessTips.entity';

export class ListWellnessTipsService {
  constructor(
    @Inject('WELLNESS_TIP_REPOSITORY')
    private wellnessTipsRepository: Repository<WellnessTip>,
  ) {}
  async execute(data: QueryFiltersRequest) {
    const skip = data.skip ? Number(data.skip) : 0;
    const take = data.take ? Number(data.take) : 3;

    return await this.wellnessTipsRepository.find({ skip, take });
  }
}
