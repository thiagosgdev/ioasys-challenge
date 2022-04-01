import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Address } from 'src/shared/entities/address.entity';
import { addressesProviders } from 'src/modules/address/address.provider';
import { CreateAddressService } from './context/createAddress/createAddress.service';
import { ListAddressesService } from './context/listEvents/listAddressess.service';
import { CreateAddressController } from './context/createAddress/createAddress.controller';
import { ListAddressesController } from './context/listEvents/listAddresses.controller';

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
