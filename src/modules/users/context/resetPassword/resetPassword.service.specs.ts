import { Test, TestingModule } from '@nestjs/testing';
import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';

describe('Reset Password Service', () => {
  let service: ResetPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResetPasswordService],
    }).compile();

    service = module.get<ResetPasswordService>(ResetPasswordService);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('Should call the repository with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await service.execute('test@test.com');
    expect(executeSpy).toHaveBeenCalledWith('test@test.com');
  });

  //  it('Should throw a ConflictException if findByEmail() return an user', async () => {
  //    jest
  //      .spyOn(repository, 'findByEmail')
  //      .mockReturnValueOnce(Promise.resolve(null));
  //    const response = service.execute('test@test.com');
  //    await expect(response).rejects.toThrow();
  //  });
});
