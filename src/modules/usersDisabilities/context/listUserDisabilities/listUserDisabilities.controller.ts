import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserDisabilitieResponseDTO } from '../../../../shared/dtos/userDisabilities/userDisability.dto';
import { ListUserDisabilitiesService } from './listUserDisabilities.service';

@ApiTags('users')
@Controller('/disabilities')
export class ListUserDisabilitiesController {
  constructor(
    private listUserDisabilitiesService: ListUserDisabilitiesService,
  ) {}

  @Get('/list/all')
  @ApiOkResponse({
    description: 'A list of users disabilities will be returned',
    type: [UserDisabilitieResponseDTO],
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listUserDisabilitiesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
