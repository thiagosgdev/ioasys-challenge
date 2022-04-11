import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateCategoryRequestDTO } from 'src/shared/dtos/categories/createCategoryRequest.dto';
import { CreateCategoryService } from 'src/modules/categories/context/createCategory/createCategory.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { CategoryResponse } from 'src/shared/dtos/categories/category.dto';

@ApiTags('categories')
@Controller()
export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The activity category created will be returned',
    type: CategoryResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
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
