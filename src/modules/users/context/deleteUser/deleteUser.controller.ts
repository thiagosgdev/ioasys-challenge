import {
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';

import { DeleteUserService } from 'src/modules/users/context/deleteUser/deleteUser.service';
import { JwtAuthGuard } from 'src/shared/providers/EncryptProvider/jwtAuth.guard';

@ApiTags('users')
@Controller()
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @UseGuards(JwtAuthGuard)
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'User deleted.',
  })
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
