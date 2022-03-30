import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListCategoriesService } from './listActivitiesCategories.service';

@ApiTags('categories')
@Controller('/categories')
export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of categories will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listCategoriesService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
