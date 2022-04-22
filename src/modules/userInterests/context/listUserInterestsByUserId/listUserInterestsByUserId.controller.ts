import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { UserInterestResponseDTO } from '../../../../shared/dtos/userInterest/userInterest.dto';
import { ListUserInterestsByUserIdService } from './listUserInterestsByUserId.service';

@ApiTags('users')
@Controller('/interests')
export class ListUserInterestsByUserIdController {
  constructor(
    private listUserInterestsByUserIdService: ListUserInterestsByUserIdService,
  ) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
    type: [UserInterestResponseDTO],
  })
  @ApiCommomDecorators()
  public async handle(@Request() req: RequestDTO) {
    try {
      return await this.listUserInterestsByUserIdService.execute(
        req.user.userId,
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
