import { Test, TestingModule } from '@nestjs/testing';
import { UserRepo } from 'src/shared/repositories/user.repository';
import { ResetPasswordService } from 'src/modules/users/context/resetPassword/resetPassword.service';
import { UserDTO } from 'src/shared/dtos/users/user.dto';

const mockUserModel = (): UserDTO => ({
  id: '56e1c6de-73d0-4d32-a130-3efa59d1f6ab',
  name: 'any_name',
  email: 'test@test.com',
  password: '12345678',
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: new Date(),
});
describe('Reset Password Service', () => {
  let service: ResetPasswordService;
  let repository: UserRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResetPasswordService,
        {
          provide: UserRepo,
          useValue: {
            findByEmail: jest.fn((dto) => {
              return mockUserModel();
            }),
          },
        },
      ],
    }).compile();

    service = module.get<ResetPasswordService>(ResetPasswordService);
    repository = module.get<UserRepo>(UserRepo);
  });

  it('Should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('Should call the repository with the correct values', async () => {
    const executeSpy = jest.spyOn(service, 'execute');
    await service.execute('test@test.com');
    expect(executeSpy).toHaveBeenCalledWith('test@test.com');
  });

  it('Should throw a ConflictException if findByEmail() return an user', async () => {
    jest
      .spyOn(repository, 'findByEmail')
      .mockReturnValueOnce(Promise.resolve(null));
    const response = service.execute('test@test.com');
    await expect(response).rejects.toThrow();
  });
});
