import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateAddressRequestDTO } from '../../../../shared/dtos/address/createAddressRequest.dto';
import { Address } from '../../../../shared/entities/address.entity';

export class CreateAddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute(data: CreateAddressRequestDTO) {
    return await this.addressRepository.save(data);
  }
}
