import {
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

import { DeleteUserService } from 'src/modules/users/context/deleteUser/deleteUser.service';

@ApiTags('users')
@Controller()
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'User deleted.',
  })
  public async handle(@Query('userId') userId: string) {
    try {
      await this.deleteUserService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
