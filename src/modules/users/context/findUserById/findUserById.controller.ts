import {
  Controller,
  Get,
  HttpException,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/providers/EncryptProvider/jwtAuth.guard';
import { FindUserByIdService } from './findUserById.service';

@UseGuards(JwtAuthGuard)
@ApiTags('users')
@Controller('/find')
export class FindUserByIdController {
  constructor(private findUserByIdService: FindUserByIdService) {}

  @Get()
  @ApiOkResponse({
    description: 'Return the user found',
  })
  public async handle(@Request() res) {
    try {
      const userId = res.user.userId;
      return await this.findUserByIdService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
