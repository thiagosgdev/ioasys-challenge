import { Test, TestingModule } from '@nestjs/testing';
import { SignoutService } from './signout.service';

describe('Signout Service', () => {
  let service: SignoutService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignoutService],
    }).compile();

    service = module.get<SignoutService>(SignoutService);
  });
  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });
});
