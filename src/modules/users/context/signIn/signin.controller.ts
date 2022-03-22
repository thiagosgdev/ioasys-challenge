import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';

@Controller('/users')
export class SigninController {
  constructor(private signinService: SigninService) {}

  @Get('/signin')
  @HttpCode(HttpStatus.OK)
  @ApiTags('users')
  @ApiOkResponse({
    description: 'A token will be returned.',
    schema: {
      example:
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY0NzI5OTI0MywiaWF0IjoxNjQ3Mjk5MjQzfQ.T56MxkVLF8M5wm5PBm3j7fJrubC4jHJPk8MmoVHhmPo',
    },
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when has validation error',
  })
  public async handle(@Body() data: SigninRequestDTO) {
    try {
      return instanceToInstance(await this.signinService.login(data));
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
