import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Activity } from 'src/shared/entities/activity.entity';
import { CreateActivityRequestDTO } from 'src/shared/dtos/activities/createActivityRequest.dto';

export class CreateActivityService {
  constructor(
    @Inject('ACTIVITY_REPOSITORY')
    private activityRepository: Repository<Activity>,
  ) {}
  async execute(data: CreateActivityRequestDTO) {
    const activity = this.activityRepository.create(data);
    await this.activityRepository.save(activity);
    return activity;
  }
}
