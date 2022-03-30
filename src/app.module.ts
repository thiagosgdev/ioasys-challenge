import { CacheModule, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { MailerModule } from '@nestjs-modules/mailer';
import * as redisStore from 'cache-manager-redis-store';

import { LoggerInterceptor } from 'src/shared/interceptors/logger.interceptor';
import { UserModule } from 'src/modules/users/user.module';
import { HealthModule } from 'src/utils/health/health.module';
import { MetricsController } from 'src/utils/metrics/metrics.controller';
import { winstonConfig } from 'src/configs/logger/winston.config';
import { mailerConfig } from 'src/configs/mailer.config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { MessageModule } from './modules/messages/message.module';
import { MessageTypeModule } from './modules/messagesTypes/messagesTypes.module';
import { MoodModule } from './modules/moods/moods.module';
import { UserMoodModule } from './modules/usersMoods/userMoods.module';
import { ActivityModule } from './modules/activities/activities.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WinstonModule.forRoot(winstonConfig),
    MailerModule.forRoot(mailerConfig),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
    HealthModule,
    TerminusModule,
    UserModule,
    MessageModule,
    MessageTypeModule,
    MoodModule,
    UserMoodModule,
    ActivityModule,
    CategoriesModule,
  ],
  controllers: [MetricsController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
