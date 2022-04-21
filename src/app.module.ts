import { CacheModule, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { APP_GUARD, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { MailerModule } from '@nestjs-modules/mailer';
import * as redisStore from 'cache-manager-redis-store';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { HealthModule } from './utils/health/health.module';
import { MetricsController } from './utils/metrics/metrics.controller';
import { LoggerInterceptor } from './shared/interceptors/logger.interceptor';
import { JwtAuthGuard } from './shared/providers/EncryptProvider/jwtAuth.guard';
import { winstonConfig } from './configs/logger/winston.config';
import { mailerConfig } from './configs/mailer.config';
import { routerConfig } from './configs/routes';
import jwtConfig from './configs/jwt';
import { UserModule } from './modules/users/user.module';
import { MessageModule } from './modules/messages/message.module';
import { MessageTypeModule } from './modules/messagesTypes/messagesTypes.module';
import { MoodModule } from './modules/moods/moods.module';
import { UserMoodModule } from './modules/usersMoods/userMoods.module';
import { ActivityModule } from './modules/activities/activities.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { UserInterestsModule } from './modules/userInterests/userInterests.module';
import { EventModule } from './modules/events/events.module';
import { AddressModule } from './modules/addresses/address.module';
import { AttendeeModule } from './modules/attendees/attendees.module';
import { DisabilitiesModule } from './modules/disabilities/disabilities.module';
import { UserDisabilitiesModule } from './modules/usersDisabilities/userDisabilities.module';
import { WellnessTipsModule } from './modules/wellnessTips/wellnessTips.module';

@Module({
  imports: [
    JwtModule.registerAsync(jwtConfig()),
    TypeOrmModule.forRoot(),
    WinstonModule.forRoot(winstonConfig),
    MailerModule.forRoot(mailerConfig),
    RouterModule.register(routerConfig),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
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
    UserInterestsModule,
    EventModule,
    AddressModule,
    AttendeeModule,
    DisabilitiesModule,
    UserDisabilitiesModule,
    WellnessTipsModule,
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
