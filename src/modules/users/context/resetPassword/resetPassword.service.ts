import { MailerService } from '@nestjs-modules/mailer';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { User } from '../../../../shared/entities/user.entity';

@Injectable()
export class ResetPasswordService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private mailerService: MailerService,
  ) {}
  async execute(email: string) {
    const exists = await this.userRepository.findOne({ email });

    if (!exists) {
      throw new NotFoundException('No user found!');
    }
    const mail = {
      to: email,
      from: 'squad8.test@gmail.com',
      subject: 'Email Reset de Senha',
      template: 'recover-password',
      context: {
        token: 'test',
      },
    };
    await this.mailerService.sendMail(mail).catch((err) => {
      throw new InternalServerErrorException(
        'There was a problem sending the e-mail, please contact the support',
      );
    });

    return {
      message: 'The new password was sent to your e-mail',
    };
  }
}
