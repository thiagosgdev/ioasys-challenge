import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { UserDTO } from 'src/shared/dtos/users/user.dto';
import { FindUserByIdService } from 'src/modules/users/context/findUserById/findUserById.service';

@ApiTags('users')
@Controller('/find')
export class FindUserByIdController {
  constructor(private findUserByIdService: FindUserByIdService) {}

  @Get()
  @ApiOkResponse({
    description: 'Return the user found',
    type: UserDTO,
  })
  @ApiCommomDecorators()
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
