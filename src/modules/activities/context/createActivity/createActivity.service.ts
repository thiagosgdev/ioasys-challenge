import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Activity } from '../../../../shared/entities/activity.entity';
import { CreateActivityRequestDTO } from '../../../../shared/dtos/activities/createActivityRequest.dto';

export class CreateActivityService {
  constructor(
    @Inject('ACTIVITY_REPOSITORY')
    private activityRepository: Repository<Activity>,
  ) {}
  async execute(data: CreateActivityRequestDTO) {
    return await this.activityRepository.save(data);
  }
}
