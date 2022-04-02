import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUserMoodsService } from 'src/modules/usersMoods/context/listUserMoods/listUserMoods.service';

@ApiTags('users')
@Controller('/moods')
export class ListUserMoodsController {
  constructor(private listUserMoodsService: ListUserMoodsService) {}

  @Get('/list/:userId')
  @ApiOkResponse({
    description: 'A list of the user moods will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return await this.listUserMoodsService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
