import { Inject } from '@nestjs/common';
import { CreateUserMoodRequestDTO } from 'src/shared/dtos/userMood/createUserMoodRequest.dto';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { Repository } from 'typeorm';

export class CreateUserMoodService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
  ) {}
  async execute(data: CreateUserMoodRequestDTO) {
    const userMood = this.userMoodRepository.create(data);
    await this.userMoodRepository.save(userMood);
    return userMood;
  }
}
