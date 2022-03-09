import { HttpModule } from '@nestjs/axios';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { HealthCheckExecutor } from '@nestjs/terminus/dist/health-check/health-check-executor.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';

const mockHealthCheckExecutor = {
  pingCheck: jest.fn((dto) => {
    return { status: 200 };
  }),
};

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [HealthController],
      providers: [HealthCheckService, HealthCheckExecutor, HttpHealthIndicator],
    })
      .overrideProvider(HttpHealthIndicator)
      .useValue(mockHealthCheckExecutor)
      .compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return 200 if the app is up', async () => {
    const test = await controller.check();
    expect(test).toBeTruthy();
  });
});
