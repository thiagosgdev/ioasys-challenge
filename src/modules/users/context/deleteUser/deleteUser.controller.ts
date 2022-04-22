import {
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { DeleteUserService } from './deleteUser.service';

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
