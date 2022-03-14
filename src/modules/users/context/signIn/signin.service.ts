import { BadRequestException } from '@nestjs/common';
import { SignIn } from 'src/domain/usecase/users/sigin.usecase';
import { SigninRequestDTO } from 'src/shared/dtos/users/signinRequest.dto';
import { SigninResponseDTO } from 'src/shared/dtos/users/signinResponse.dto';

export class SigninService implements SignIn {
  async login(data: SigninRequestDTO): Promise<SigninResponseDTO> {
    const { email, password } = data;
    if (!email || !password) {
      throw new BadRequestException('Required field not provided!');
    }
    //verify the user info
    //call generate token method
    return {
      token: 'this a token',
      refresh_token: 'this is a refresh token',
    };
  }
}
