import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { ListUsersService } from 'src/modules/users/context/listUsers/listUsers.service';

@Controller('/users')
export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
  @ApiOkResponse({
    description: 'A list of users will be returned',
  })
  public async handle() {
    try {
      return instanceToInstance(await this.listUsersService.execute());
    } catch (error) {
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
