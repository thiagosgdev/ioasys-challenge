import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Disability } from 'src/shared/entities/disability.entity';

export class ListDisabilitiesService {
  constructor(
    @Inject('DISABILITY_REPOSITORY')
    private disabilityRepository: Repository<Disability>,
  ) {}
  async execute() {
    return await this.disabilityRepository.find();
  }
}
