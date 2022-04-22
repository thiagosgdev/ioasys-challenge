import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateAddressRequestDTO } from '../../../../shared/dtos/address/createAddressRequest.dto';
import { AddressResponseDTO } from '../../../../shared/dtos/address/address.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { CreateAddressService } from './createAddress.service';

@ApiTags('addresses')
@Controller()
export class CreateAddressController {
  constructor(private createAddressService: CreateAddressService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Return the address created.',
    type: AddressResponseDTO,
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
