import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { ListUsersService } from './listUsers.service';

@ApiTags('users')
@Controller()
export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of users will be returned',
    type: UserDTO,
  })
  @ApiCommomDecorators()
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
