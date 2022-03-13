import { Module } from '@nestjs/common';
import { SigninController } from './context/signIn/signin.controller';
import { SigninService } from './context/signIn/signin.service';

@Module({
  imports: [],
  providers: [SigninService],
  controllers: [SigninController],
})
export class UserModule {}
