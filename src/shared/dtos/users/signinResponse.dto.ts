import { UserEntityDTO } from 'src/shared/dtos/users/userEntity.dto';

export class SigninResponseDTO {
  token: string;
  refreshToken: string;
  user: UserEntityDTO;
}
