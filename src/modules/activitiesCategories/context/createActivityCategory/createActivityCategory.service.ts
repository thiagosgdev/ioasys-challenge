import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { CreateActivityCategoryRequestDTO } from 'src/shared/dtos/activitiesCategories/createActivityCategoryRequest.dto';

export class CreateActivityCategoryService {
  constructor(
    @Inject('ACTIVITY_CATEGORY_REPOSITORY')
    private activityCategoryRepository: Repository<ActivityCategories>,
  ) {}
  async execute(data: CreateActivityCategoryRequestDTO) {
    const activity = this.activityCategoryRepository.create(data);
    await this.activityCategoryRepository.save(activity);
    return activity;
  }
}
