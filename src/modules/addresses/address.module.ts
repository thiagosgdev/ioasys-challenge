import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../infra/database.module';
import { Address } from '../../shared/entities/address.entity';
import { addressesProviders } from './address.provider';
import { CreateAddressService } from './context/createAddress/createAddress.service';
import { ListAddressesService } from './context/listAddresses/listAddressess.service';
import { CreateAddressController } from './context/createAddress/createAddress.controller';
import { ListAddressesController } from './context/listAddresses/listAddresses.controller';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Address])],
  providers: [
    ...addressesProviders,
    CreateAddressService,
    ListAddressesService,
  ],
  controllers: [CreateAddressController, ListAddressesController],
})
export class AddressModule {}
