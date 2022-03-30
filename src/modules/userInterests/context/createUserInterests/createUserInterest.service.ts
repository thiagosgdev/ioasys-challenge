import { Inject } from '@nestjs/common';
import { CreateUserInterestRequestDTO } from 'src/shared/dtos/userInterest/createUserInterestRequest.dto';
import { UserInterest } from 'src/shared/entities/userInterests.entity';
import { Repository } from 'typeorm';

export class CreateUserInterestService {
  constructor(
    @Inject('USER_INTEREST_REPOSITORY')
    private userInterestRepository: Repository<UserInterest>,
  ) {}
  async execute(data: CreateUserInterestRequestDTO) {
    const userInterest = this.userInterestRepository.create(data);
    await this.userInterestRepository.save(userInterest);
    return userInterest;
  }
}
