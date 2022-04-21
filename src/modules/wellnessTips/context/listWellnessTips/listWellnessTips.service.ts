import { Inject } from '@nestjs/common';
import { QueryFiltersRequest } from 'src/shared/dtos/shared/queryFilters.dto';
import { WellnessTip } from 'src/shared/entities/wellnessTips.entity';
import { Repository } from 'typeorm';

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
