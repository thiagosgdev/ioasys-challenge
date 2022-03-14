import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { HealthModule } from './utils/health/health.module';
import { MetricsController } from './utils/metrics/metrics.controller';

@Module({
  imports: [HealthModule, UserModule],
  controllers: [AppController, MetricsController],
  providers: [AppService],
})
export class AppModule {}
