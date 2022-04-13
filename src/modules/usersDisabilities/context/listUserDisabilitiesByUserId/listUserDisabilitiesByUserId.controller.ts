import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserDisabilitieResponseDTO } from '../../../../shared/dtos/userDisabilities/userDisability.dto';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ListUserDisabilitiesByUserIdService } from './listUserDisabilitiesByUserId.service';

@ApiTags('users')
@Controller('/disabilities')
export class ListUserDisabilitiesByUserIdController {
  constructor(
    private listUserDisabilitiesByUserIdService: ListUserDisabilitiesByUserIdService,
  ) {}

  @Get('/list/user')
  @ApiOkResponse({
    description: 'A list of the user disabilities will be returned',
    type: UserDisabilitieResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(@Request() req: RequestDTO) {
    try {
      const userId = req.user.userId;
      return await this.listUserDisabilitiesByUserIdService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
