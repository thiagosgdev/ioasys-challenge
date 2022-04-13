import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateCategoryRequestDTO } from '../../../../shared/dtos/categories/createCategoryRequest.dto';
import { Category } from '../../../../shared/entities/category.entity';

export class CreateCategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}
  async execute(data: CreateCategoryRequestDTO) {
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }
}
