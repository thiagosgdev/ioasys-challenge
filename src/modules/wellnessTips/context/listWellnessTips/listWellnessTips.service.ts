import { Inject } from '@nestjs/common';
import { WellnessTip } from 'src/shared/entities/wellnessTips.entity';
import { Repository } from 'typeorm';

export class ListWellnessTipsService {
  constructor(
    @Inject('WELLNESS_TIP_REPOSITORY')
    private wellnessTipsRepository: Repository<WellnessTip>,
  ) {}
  async execute() {
    return await this.wellnessTipsRepository.find();
  }
}
