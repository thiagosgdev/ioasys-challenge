import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ActivityCategories } from 'src/shared/entities/activityCategories.entity';
import { ActivityCategoryResponse } from 'src/shared/dtos/activitiesCategories/activityCategory.dto';

export class ListActivitiesCategoriesService {
  constructor(
    @Inject('ACTIVITY_CATEGORY_REPOSITORY')
    private activityCategoryRepository: Repository<ActivityCategories>,
  ) {}
  async execute(): Promise<ActivityCategoryResponse[]> {
    return await this.activityCategoryRepository.find();
  }
}
