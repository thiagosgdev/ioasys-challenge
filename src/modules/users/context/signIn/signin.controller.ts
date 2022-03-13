import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { instanceToInstance } from 'class-transformer';
import { Response } from 'express';

import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninService } from './signin.service';

@Controller('/signin')
export class SigninController {
  constructor(private signinService: SigninService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async handle(
    @Body() data: SigninRequestDTO,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      const tokens = await this.signinService.login(data);
      if (tokens) {
        return res.status(200).send(instanceToInstance(tokens));
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}
