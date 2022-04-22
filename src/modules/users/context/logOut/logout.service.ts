import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

export class LogoutService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async logout(token: string, userId: string): Promise<void> {
    await this.cacheManager.set(token, userId, { ttl: 6000 });
  }
}
