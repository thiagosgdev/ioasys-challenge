import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { UserMood } from 'src/shared/entities/userMoods.entity';

export class CreateUserMoodService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
  ) {}
  async execute(data: CreateUserMoodRequestDTO) {
    return await this.userMoodRepository.save(data);
  }
}
