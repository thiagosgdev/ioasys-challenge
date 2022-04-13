import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import envConfig from '../../../configs/env';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envConfig().jwtSecret,
    });
  }

  async validate(payload: { userId: number; role: string }) {
    return {
      userId: payload.userId,
      role: payload.role,
    };
  }
}
