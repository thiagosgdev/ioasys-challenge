import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ActivityCategories } from '../../../../shared/entities/activityCategories.entity';
import { CreateActivityCategoryRequestDTO } from '../../../../shared/dtos/activitiesCategories/createActivityCategoryRequest.dto';

export class CreateActivityCategoryService {
  constructor(
    @Inject('ACTIVITY_CATEGORY_REPOSITORY')
    private activityCategoryRepository: Repository<ActivityCategories>,
  ) {}
  async execute(data: CreateActivityCategoryRequestDTO) {
    return await this.activityCategoryRepository.save(data);
  }
}
