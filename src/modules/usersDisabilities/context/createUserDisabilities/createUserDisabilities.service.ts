import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserDisability } from '../../../../shared/entities/userDisability.entity';
import { CreateUserDisabilityRequestDTO } from '../../../../shared/dtos/userDisabilities/createUserDisabilitiesRequest.dto';

export class CreateUserDisabilitiesService {
  constructor(
    @Inject('USER_DISABILITY_REPOSITORY')
    private userDisabilitiesRepository: Repository<UserDisability>,
  ) {}

  async execute(userId: string, data: CreateUserDisabilityRequestDTO) {
    const newUserDisability = [];
    await this.userDisabilitiesRepository.softDelete({ userId });

    data.disabilityIds.forEach(async (disability) => {
      newUserDisability.push({ userId, disabilityId: disability });
    });

    return await this.userDisabilitiesRepository.save(newUserDisability);
  }
}
