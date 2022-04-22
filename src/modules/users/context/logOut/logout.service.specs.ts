import { Test, TestingModule } from '@nestjs/testing';
import { LogoutService } from './logout.service';

describe('Signout Service', () => {
  let service: LogoutService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogoutService],
    }).compile();

    service = module.get<LogoutService>(LogoutService);
  });
  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
});
