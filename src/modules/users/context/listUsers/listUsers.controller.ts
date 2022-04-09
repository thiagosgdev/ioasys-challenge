import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUsersService } from 'src/modules/users/context/listUsers/listUsers.service';
import { Role } from 'src/shared/decorators/role.decorator';

@ApiTags('users')
@Controller()
export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  @Role('admin')
  @Get('/list')
  @ApiOkResponse({
    description: 'A list of users will be returned',
  })
  public async handle() {
    try {
      return await this.listUsersService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
