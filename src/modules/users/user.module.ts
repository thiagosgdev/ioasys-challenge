import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/infra/database.module';
import { User } from 'src/shared/entities/user.entity';
import { ResetPasswordController } from 'src/modules/users/context/resetPassword/resetPassword.controller';
import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';
import { SigninController } from 'src/modules/users/context/signIn/signin.controller';
import { SigninService } from 'src/modules/users/context/signIn/signin.service';
import { userProviders } from './user.provider';
import { MailerModule } from '@nestjs-modules/mailer';
import { BcryptProvider } from 'src/shared/providers/HasherProvider/bcrypt.provider';
import { JwtProvider } from 'src/shared/providers/EncryptProvider/jwt.provider';
import { SignUpService } from './context/signUp/signUp.service';
import { SignUpController } from './context/signUp/signUp.controller';

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
  ],
  controllers: [SigninController, ResetPasswordController, SignUpController],
})
export class UserModule {}
