import {
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

import { DeleteUserService } from 'src/modules/users/context/deleteUser/deleteUser.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

@ApiTags('users')
@Controller()
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'User deleted.',
  })
  @ApiCommomDecorators()
  public async handle(@Request() req) {
    try {
      await this.deleteUserService.execute(req.user.userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
