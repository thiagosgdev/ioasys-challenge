import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';

import { UserDTO } from '../../../../shared/dtos/users/user.dto';
import { Public } from '../../../../shared/decorators/public.decorator';
import { SignUpRequestDTO } from '../../../../shared/dtos/users/signUpRequest.dto';
import { SignUpService } from './signUp.service';

@Public()
@ApiTags('users')
@Controller('/signup')
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The user object will be returned',
    type: UserDTO,
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when a validation error happens',
  })
  @ApiConflictResponse({
    description: 'E-mail already in use!',
  })
  @ApiTooManyRequestsResponse({
    description:
      'Too many request. Please wait a while before making more requests!',
  })
  public async handle(@Body() data: SignUpRequestDTO) {
    try {
      return await this.signUpService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
