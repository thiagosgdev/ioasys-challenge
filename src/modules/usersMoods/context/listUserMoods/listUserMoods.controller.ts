import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListUserMoodsService } from './listUserMoods.service';

@Controller('/users')
export class ListUserMoodsController {
  constructor(private listUserMoodsService: ListUserMoodsService) {}

  @Get('/moods/list/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
  @ApiOkResponse({
    description: 'A list of the user moods will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return instanceToInstance(
        await this.listUserMoodsService.execute(userId),
      );
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
