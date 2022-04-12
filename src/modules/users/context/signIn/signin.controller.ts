import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';
import { Public } from 'src/shared/decorators/public.decorator';

@ApiTags('users')
@Controller()
export class SigninController {
  constructor(private signinService: SigninService) {}

  @Public()
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'A token and refresh token will be returned.',
  })
  @ApiUnauthorizedResponse({
    description:
      'This will be returned when has a user credentials validation error',
  })
  @ApiNotFoundResponse({
    description:
      'This will be returned when no user is found with the email provided',
  })
  @ApiBadRequestResponse({
    description:
      'This will be returned when has validation error or no user is found',
  })
  @ApiTooManyRequestsResponse({
    description:
      'Too many request. Please wait a while before making more requests!',
  })
  public async handle(@Body() data: SigninRequestDTO) {
    try {
      return await this.signinService.login(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
