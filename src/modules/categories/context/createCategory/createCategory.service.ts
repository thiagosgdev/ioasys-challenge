import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Category } from 'src/shared/entities/category.entity';
import { CreateCategoryRequestDTO } from 'src/shared/dtos/categories/createCategoryRequest.dto';

export class CreateCategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) {}
  async execute(data: CreateCategoryRequestDTO) {
    const category = this.categoryRepository.create(data);
    await this.categoryRepository.save(category);
    return category;
  }
}
