import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAddressRequestDTO } from 'src/shared/dtos/address/createAddressRequest.dto';
import { CreateAddressService } from 'src/modules/addresses/context/createAddress/createAddress.service';
import { AddressResponse } from 'src/shared/dtos/address/address.dto';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';

@ApiTags('addresses')
@Controller()
export class CreateAddressController {
  constructor(private createAddressService: CreateAddressService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the address created.',
    type: AddressResponse,
  })
  @ApiBadRequestResponse({
    description: 'Returns a message if a invalid field is provided.',
  })
  @ApiCommomDecorators()
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
