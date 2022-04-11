import { UserDTO } from 'src/shared/dtos/users/user.dto';

export class SigninResponseDTO {
  token: string;
  refreshToken: string;
  user: UserDTO;
}
