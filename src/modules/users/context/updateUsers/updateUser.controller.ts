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

import { UpdateUserService } from 'src/modules/users/context/updateUsers/updateUser.service';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { UpdateUserDTO } from 'src/shared/dtos/users/updateUser.dto';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

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
