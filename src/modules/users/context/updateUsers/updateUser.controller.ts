import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UpdateUserService } from 'src/modules/users/context/updateUsers/updateUser.service';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { UpdateUserDTO } from 'src/shared/dtos/users/updateUser.dto';

@ApiTags('Users')
@Controller('/users')
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Put()
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
  @ApiOkResponse({
    type: UserDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async handle(@Body() updateUserRequestBody: UpdateUserDTO) {
    try {
      return await this.updateUserService.update(updateUserRequestBody);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}