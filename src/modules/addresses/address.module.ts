import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { Address } from 'src/shared/entities/address.entity';
import { addressesProviders } from 'src/modules/addresses/address.provider';
import { CreateAddressService } from 'src/modules/addresses/context/createAddress/createAddress.service';
import { ListAddressesService } from 'src/modules/addresses/context/listAddresses/listAddressess.service';
import { CreateAddressController } from 'src/modules/addresses/context/createAddress/createAddress.controller';
import { ListAddressesController } from 'src/modules/addresses/context/listAddresses/listAddresses.controller';

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
