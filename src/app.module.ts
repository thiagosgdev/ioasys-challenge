import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MailerModule } from '@nestjs-modules/mailer';

import { LoggerInterceptor } from 'src/shared/interceptors/logger.interceptor';
import { UserModule } from 'src/modules/users/user.module';
import { HealthModule } from 'src/utils/health/health.module';
import { MetricsController } from 'src/utils/metrics/metrics.controller';
import { winstonConfig } from 'src/configs/logger/winston.config';
import { mailerConfig } from 'src/configs/mailer.config';
import { EtherealMailProvider } from './shared/providers/MailProvider/ethereal.provider';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WinstonModule.forRoot(winstonConfig),
    MailerModule.forRoot(mailerConfig),
    HealthModule,
    TerminusModule,
    UserModule,
  ],
  controllers: [MetricsController],
  providers: [
    {
      provide: 'ETHEREAL_PROVIDER',
      useClass: EtherealMailProvider,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class AppModule {}
