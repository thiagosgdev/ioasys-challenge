import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateCategoryRequestDTO } from 'src/shared/dtos/categories/createCategoryRequest.dto';
import { CreateCategoryService } from 'src/modules/categories/context/createCategory/createCategory.service';

@ApiTags('categories')
@Controller()
export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity category created will be returned',
  })
  public async handle(@Body() data: CreateCategoryRequestDTO) {
    try {
      return await this.createCategoryService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
