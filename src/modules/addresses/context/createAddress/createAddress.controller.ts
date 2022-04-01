import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateAddressRequestDTO } from 'src/shared/dtos/address/createAddressRequest.dto';
import { CreateAddressService } from 'src/modules/addresses/context/createAddress/createAddress.service';

@ApiTags('addresses')
@Controller()
export class CreateAddressController {
  constructor(private createAddressService: CreateAddressService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the address created.',
  })
  public async handle(@Body() data: CreateAddressRequestDTO) {
    try {
      return await this.createAddressService.execute(data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
