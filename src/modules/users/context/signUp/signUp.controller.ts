import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { instanceToInstance } from 'class-transformer';
import { SignUpRequestDTO } from 'src/shared/dtos/users/signUpRequest.dto';
import { SignUpService } from './signUp.service';

@Controller('/users')
export class SignUpController {
  constructor(private signUpService: SignUpService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  public async handle(@Body() data: SignUpRequestDTO) {
    try {
      if (data.password != data.passwordConfirmation) {
        throw new BadRequestException('Password not match! Try again.');
      }
      return instanceToInstance(await this.signUpService.create(data));
    } catch (error) {
      throw new HttpException(error.response.message, error.response.status);
    }
  }
}
