import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserDisability } from '../../../../shared/entities/userDisability.entity';

export class ListUserDisabilitiesService {
  constructor(
    @Inject('USER_DISABILITY_REPOSITORY')
    private userDisabilityRepository: Repository<UserDisability>,
  ) {}
  async execute() {
    return await this.userDisabilityRepository.find();
  }
}
