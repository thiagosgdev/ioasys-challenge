import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheModule, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from 'src/infra/database.module';
import { User } from 'src/shared/entities/user.entity';
import { ResetPasswordController } from 'src/modules/users/context/resetPassword/resetPassword.controller';
import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';
import { SigninController } from 'src/modules/users/context/signIn/signin.controller';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';
import { BcryptProvider } from 'src/shared/providers/HasherProvider/bcrypt.provider';
import { JwtProvider } from 'src/shared/providers/EncryptProvider/jwt.provider';
import { userProviders } from 'src/modules/users/user.provider';
import { SignUpService } from 'src/modules/users/context/signUp/signUp.service';
import { SignUpController } from 'src/modules/users/context/signUp/signUp.controller';
import { LogoutService } from 'src/modules/users/context/logOut/logout.service';
import { LogoutController } from 'src/modules/users/context/logOut/logout.controller';

@Module({
  imports: [
    MailerModule,
    DatabaseModule,
    TypeOrmModule.forFeature([User]),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://redis:6379',
      // Store-specific configuration:
      socket: {
        host: 'redis',
        port: 6379,
        localAddress: 'redis://redis:6379',
        localPort: 6379,
      },
    }),
  ],
  providers: [
    ...userProviders,
    { provide: 'HASH_PROVIDER', useClass: BcryptProvider },
    { provide: 'ENCRYPTER_PROVIDER', useClass: JwtProvider },
    SigninService,
    ResetPasswordService,
    SignUpService,
    LogoutService,
  ],
  controllers: [
    SigninController,
    ResetPasswordController,
    SignUpController,
    LogoutController,
  ],
})
export class UserModule {}
