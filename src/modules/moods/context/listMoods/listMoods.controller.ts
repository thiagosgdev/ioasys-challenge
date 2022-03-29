import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListMoodsService } from './listMoods.service';

@Controller('/moods')
export class ListMoodsController {
  constructor(private listMoodsService: ListMoodsService) {}

  @Get('/list')
  @ApiTags('moods')
  @ApiOkResponse({
    description: 'A list of moods will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listMoodsService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
