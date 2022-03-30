import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';
import { ListUserInterestsService } from './listUserInterests.service';

@Controller('/users')
export class ListUserInterestsController {
  constructor(private listUserInterestsService: ListUserInterestsService) {}

  @Get('/interests/:userId')
  @ApiTags('users')
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
  })
  public async handle(@Param('userId') userId: string) {
    try {
      return instanceToInstance(
        await this.listUserInterestsService.execute(userId),
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
