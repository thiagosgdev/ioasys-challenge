import { UserDTO } from './user.dto';

export class SigninResponseDTO {
  token: string;
  refreshToken: string;
  user: UserDTO;
}
