import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from 'src/utils/health/health.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [],
  controllers: [HealthController],
})
export class HealthModule {}
