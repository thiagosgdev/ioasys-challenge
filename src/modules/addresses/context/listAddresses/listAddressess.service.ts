import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Address } from 'src/shared/entities/address.entity';

export class ListAddressesService {
  constructor(
    @Inject('ADDRESS_REPOSITORY')
    private addressRepository: Repository<Address>,
  ) {}
  async execute() {
    return await this.addressRepository.find();
  }
}
