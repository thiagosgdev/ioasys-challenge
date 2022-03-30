import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { CreateCategoryRequestDTO } from 'src/shared/dtos/categories/createCategoryRequest.dto';
import { CreateCategoryService } from './createCategory.service';

@ApiTags('categories')
@Controller('/categories')
export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity category created will be returned',
  })
  public async handle(@Body() data: CreateCategoryRequestDTO) {
    try {
      return instanceToInstance(await this.createCategoryService.execute(data));
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
