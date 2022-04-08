import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheModule, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

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
import { ListUsersService } from 'src/modules/users/context/listUsers/listUsers.service';
import { ListUsersController } from 'src/modules/users/context/listUsers/listUsers.controller';
import { UpdateUserService } from 'src/modules/users/context/updateUsers/updateUser.service';
import { UpdateUserController } from 'src/modules/users/context/updateUsers/updateUser.controller';
import { RefreshService } from 'src/modules/users/context/refresh/refresh.service';
import { RefreshController } from 'src/modules/users/context/refresh/refresh.controller';
import { FindUserByEmailController } from 'src/modules/users/context/findUserByEmail/findUserByEmail.controller';
import { FindUserByEmailService } from 'src/modules/users/context/findUserByEmail/findUserByEmail.service';
import { JwtStrategy } from 'src/shared/providers/EncryptProvider/jwt.strategy';
import envConfig from 'src/configs/env';
import { FindUserByIdController } from './context/findUserById/findUserById.controller';
import { FindUserByIdService } from './context/findUserById/findUserById.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: envConfig().jwtSecret,
      }),
      inject: [ConfigService],
    }),
    MailerModule,
    DatabaseModule,
    PassportModule,
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
    JwtStrategy,
    SigninService,
    ResetPasswordService,
    SignUpService,
    LogoutService,
    ListUsersService,
    UpdateUserService,
    RefreshService,
    FindUserByEmailService,
    FindUserByIdService,
  ],
  controllers: [
    SigninController,
    ResetPasswordController,
    SignUpController,
    LogoutController,
    ListUsersController,
    UpdateUserController,
    RefreshController,
    FindUserByEmailController,
    FindUserByIdController,
  ],
})
export class UserModule {}
