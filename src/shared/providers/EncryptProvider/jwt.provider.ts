import { UnauthorizedException } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import envConfig from 'src/configs/env';
import { Decrypter } from 'src/shared/providers/EncryptProvider/protocols/decrypter';
import { Encrypter } from 'src/shared/providers/EncryptProvider/protocols/encrypter';
import { EncrypterRefresh } from 'src/shared/providers/EncryptProvider/protocols/encrypterExpirationDate';

export class JwtProvider implements Encrypter, Decrypter, EncrypterRefresh {
  async encrypt(value: string): Promise<string> {
    const accessToken = sign({}, envConfig().jwtSecret, {
      subject: value,
      expiresIn: envConfig().jwtExpires,
    });
    return accessToken;
  }

  decrypt(token: string): string {
    let id = '';
    verify(token, envConfig().jwtSecret, async (err, payload) => {
      if (!err) {
        id = String(payload.sub);
      }
    });
    if (!id) {
      throw new UnauthorizedException('Not a valid token! Please signin again');
    }
    return id;
  }

  async encryptRefresh(value: string): Promise<string> {
    const refreshToken = sign({}, envConfig().jwtSecret, {
      subject: value,
      expiresIn: envConfig().jwtRefExpires,
    });
    return refreshToken;
  }
}
