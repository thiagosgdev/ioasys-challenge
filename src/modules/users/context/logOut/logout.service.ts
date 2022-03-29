import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Decrypter } from 'src/shared/providers/EncryptProvider/protocols/decrypter';

export class LogoutService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    @Inject('ENCRYPTER_PROVIDER')
    private decrypter: Decrypter,
  ) {}

  async logout(token: string): Promise<void> {
    const userId = this.decrypter.decrypt(token);
    await this.cacheManager.set(token, userId, { ttl: 6000 });
  }
}
