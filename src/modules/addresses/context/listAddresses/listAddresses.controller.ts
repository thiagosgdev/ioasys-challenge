import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { ListAddressesService } from './listAddressess.service';

@ApiTags('addresses')
@Controller()
export class ListAddressesController {
  constructor(private listAddressesService: ListAddressesService) {}

  @Get('/list')
  @ApiOkResponse({
    description: 'A list of addresses will be returned',
  })
  @ApiCommomDecorators()
  public async handle() {
    try {
      return await this.listAddressesService.execute();
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
