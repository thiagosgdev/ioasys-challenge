import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
  Request,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { UpdateUserDTO } from '../../../../shared/dtos/users/updateUser.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UpdateUserService } from './updateUser.service';

@ApiTags('users')
@Controller()
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: UserDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  @ApiNotFoundResponse({
    description: 'No user found!',
  })
  @ApiCommomDecorators()
  public async handle(
    @Body() updateUserRequestBody: UpdateUserDTO,
    @Request() req,
  ) {
    try {
      const userId = req.user.userId;
      return await this.updateUserService.update(userId, updateUserRequestBody);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
