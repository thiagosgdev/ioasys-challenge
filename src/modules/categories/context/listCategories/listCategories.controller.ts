import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListCategoriesService } from 'src/modules/categories/context/listCategories/listCategories.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

@ApiTags('categories')
@Controller()
export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of categories will be returned',
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listCategoriesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
