import * as redisStore from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';
import { CacheModule, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { DatabaseModule } from '../../infra/database.module';
import jwtConfig from '../../configs/jwt';
import { User } from '../../shared/entities/user.entity';
import { BcryptProvider } from '../../shared/providers/HasherProvider/bcrypt.provider';
import { JwtProvider } from '../../shared/providers/EncryptProvider/jwt.provider';
import { JwtStrategy } from '../../shared/providers/EncryptProvider/jwt.strategy';
import { ResetPasswordController } from './context/resetPassword/resetPassword.controller';
import { ResetPasswordService } from './context/resetPassword/resetPassword.service';
import { SigninController } from './context/signIn/signin.controller';
import { SigninService } from './context/signIn/signin.service';
import { SignUpService } from './context/signUp/signUp.service';
import { SignUpController } from './context/signUp/signUp.controller';
import { LogoutService } from './context/logOut/logout.service';
import { LogoutController } from './context/logOut/logout.controller';
import { ListUsersService } from './context/listUsers/listUsers.service';
import { ListUsersController } from './context/listUsers/listUsers.controller';
import { UpdateUserService } from './context/updateUsers/updateUser.service';
import { UpdateUserController } from './context/updateUsers/updateUser.controller';
import { RefreshService } from './context/refresh/refresh.service';
import { RefreshController } from './context/refresh/refresh.controller';
import { FindUserByEmailController } from './context/findUserByEmail/findUserByEmail.controller';
import { FindUserByEmailService } from './context/findUserByEmail/findUserByEmail.service';
import { FindUserByIdController } from './context/findUserById/findUserById.controller';
import { FindUserByIdService } from './context/findUserById/findUserById.service';
import { userProviders } from './user.provider';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig()),
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
