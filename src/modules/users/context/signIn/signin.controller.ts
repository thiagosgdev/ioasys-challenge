import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { instanceToInstance } from 'class-transformer';

import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';

@ApiTags('users')
@Controller('/users')
export class SigninController {
  constructor(private signinService: SigninService) {}

  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'A token and refresh token will be returned.',
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
      throw new HttpException(error.message, error.statusCode);
    }
  }
}
