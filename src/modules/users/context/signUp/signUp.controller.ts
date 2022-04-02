import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { SignUpRequestDTO } from 'src/shared/dtos/users/signUpRequest.dto';
import { SignUpService } from 'src/modules/users/context/signUp/signUp.service';

@ApiTags('users')
@Controller('/signup')
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @Post()
  @ApiOkResponse({
    description: 'The user object will be returned',
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when a validation error happens',
  })
  @ApiConflictResponse({
    description: 'E-mail already in use!',
  })
  public async handle(@Body() data: SignUpRequestDTO) {
    try {
      return await this.signUpService.create(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
