import { ConsoleLogger, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserDisability } from 'src/shared/entities/userDisability.entity';
import { CreateUserDisabilityRequestDTO } from 'src/shared/dtos/userDisabilities/createUserDisabilitiesRequest.dto';

export class CreateUserDisabilitiesService {
  constructor(
    @Inject('USER_DISABILITY_REPOSITORY')
    private userDisabilitiesRepository: Repository<UserDisability>,
  ) {}

  async execute(data: CreateUserDisabilityRequestDTO) {
    const userDisability = {
      userId: data.userId,
      disabilityId: '',
    };
    let newUserDisability: UserDisability;
    const disabilities = data.disabilityIds;

    disabilities.forEach(async (disability) => {
      userDisability.disabilityId = disability;
      newUserDisability =
        this.userDisabilitiesRepository.create(userDisability);
      await this.userDisabilitiesRepository.save(newUserDisability);
    });
  }
}
