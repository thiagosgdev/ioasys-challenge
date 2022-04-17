import { SignUpRequestDTO } from '../dtos/users/signUpRequest.dto';
import { UserDTO } from '../dtos/users/user.dto';

export const mockUser: UserDTO = {
  id: 'any_id',
  name: 'Test',
  email: 'test@test.com',
  password: null,
  emergencyName: 'any_name',
  emergencyPhone: 'any_phone',
  isAdmin: false,
  isPremium: false,
  aboutMe: null,
  phone: '12345',
  city: 'Test City',
  createdAt: new Date(),
  updatedAt: null,
  deletedAt: null,
};

export const mockSignUpRequestDTO = (): SignUpRequestDTO => {
  return {
    name: 'any_name',
    email: 'any_email@test.com',
    password: 'any_password',
    passwordConfirmation: 'any_password',
  };
};
