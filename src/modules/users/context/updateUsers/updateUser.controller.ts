import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Put,
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

@ApiTags('users')
@Controller()
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Put()
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
  public async handle(@Body() updateUserRequestBody: UpdateUserDTO) {
    try {
      return await this.updateUserService.update(updateUserRequestBody);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
