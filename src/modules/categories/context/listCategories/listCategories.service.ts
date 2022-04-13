import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CategoryResponse } from '../../../../shared/dtos/categories/category.dto';
import { Category } from '../../../../shared/entities/category.entity';

export class ListCategoriesService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}
  async execute(): Promise<CategoryResponse[]> {
    return await this.categoryRepository.find();
  }
}
