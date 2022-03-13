import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';

export interface SignIn {
  login(data: SigninRequestDTO): Promise<SigninResponseDTO>;
}
