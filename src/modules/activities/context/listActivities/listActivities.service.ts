import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ActivityResponse } from '../../../../shared/dtos/activities/activity.dto';
import { Activity } from '../../../../shared/entities/activity.entity';

export class ListActivitiesService {
  constructor(
    @Inject('ACTIVITY_REPOSITORY')
    private activityRepository: Repository<Activity>,
  ) {}
  async execute(): Promise<ActivityResponse[]> {
    return await this.activityRepository.find();
  }
}
