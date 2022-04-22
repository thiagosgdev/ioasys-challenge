import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserInterestResponseDTO } from '../../../../shared/dtos/userInterest/userInterest.dto';
import { ListUserInterestsService } from './listUserInterests.service';

@ApiTags('users')
@Controller('/interests')
export class ListUserInterestsController {
  constructor(private listUserInterestsService: ListUserInterestsService) {}

  @Get('/list/all')
  @ApiOkResponse({
    description: 'A list of the user interests will be returned',
    type: [UserInterestResponseDTO],
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listUserInterestsService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
