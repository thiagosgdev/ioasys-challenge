import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListUsersService } from 'src/modules/users/context/listUsers/listUsers.service';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';

@ApiTags('users')
@Controller()
export class ListUsersController {
  constructor(private listUsersService: ListUsersService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of users will be returned',
  })
  public async handle(@Request() req: RequestDTO) {
    try {
      console.log(req.user.role);
      return await this.listUsersService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
