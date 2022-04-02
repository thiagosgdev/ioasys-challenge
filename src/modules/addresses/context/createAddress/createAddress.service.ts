import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

import { CreateAddressRequestDTO } from 'src/shared/dtos/address/createAddressRequest.dto';
import { Address } from 'src/shared/entities/address.entity';

export class CreateAddressService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute(data: CreateAddressRequestDTO) {
    const address = this.addressRepository.create(data);
    return await this.addressRepository.save(address);
  }
}
