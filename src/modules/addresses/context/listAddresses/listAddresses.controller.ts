import { Controller, Get, HttpException } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListAddressesService } from 'src/modules/addresses/context/listAddresses/listAddressess.service';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

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
