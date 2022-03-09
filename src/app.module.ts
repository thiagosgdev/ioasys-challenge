import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TerminusModule,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './utils/health/health.controller';
import { MetricsController } from './utils/metrics/metrics.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [AppController, HealthController, MetricsController],
  providers: [
    AppService,
    HealthCheckService,
    HttpHealthIndicator,
    TypeOrmHealthIndicator,
  ],
})
export class AppModule {}
