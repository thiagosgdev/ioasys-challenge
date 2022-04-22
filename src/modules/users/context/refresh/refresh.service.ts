import { Inject } from '@nestjs/common';

import { Decrypter } from '../../../../shared/providers/EncryptProvider/protocols/decrypter';
import { Encrypter } from '../../../../shared/providers/EncryptProvider/protocols/encrypter';

export class RefreshService {
  constructor(
    @Inject('ENCRYPTER_PROVIDER')
    private decrypter: Decrypter,
    @Inject('ENCRYPTER_PROVIDER')
    private encrypter: Encrypter,
  ) {}

  async execute(refreshToken: string) {
    const id = this.decrypter.decrypt(refreshToken);

    const token = await this.encrypter.encrypt(id);

    return { token };
  }
}
