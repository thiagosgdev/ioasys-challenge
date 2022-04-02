import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserInterestRequestDTO } from 'src/shared/dtos/userInterest/createUserInterestRequest.dto';
import { UserInterest } from 'src/shared/entities/userInterests.entity';

export class CreateUserInterestService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(data: CreateUserInterestRequestDTO) {
    return await this.userInterestRepository.save(data);
  }
}
