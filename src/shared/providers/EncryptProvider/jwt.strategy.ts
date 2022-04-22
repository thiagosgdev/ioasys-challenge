import {
  CACHE_MANAGER,
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Cache } from 'cache-manager';

import envConfig from '../../../configs/env';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: (
        _request: Request,
        rawJwtToken: any,
        done: (err: any, secretOrKey?: string | Buffer) => void,
      ) => {
        void this.isBlocked(rawJwtToken).then((isBlocked) => {
          if (isBlocked) {
            done(new UnauthorizedException('AEE'));
          } else {
            done(null, envConfig().jwtSecret);
          }
        });
      },
    });
  }

  async validate(payload: { userId: string; role: string }) {
    return {
      userId: payload.userId,
      role: payload.role,
    };
  }

  async isBlocked(token: string) {
    const test = await this.cacheManager.get(token);
    if (test) return true;
    return false;
  }
}
