import { MailerService } from '@nestjs-modules/mailer';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';

import { makeRandomString } from '../../../../shared/functions/makeRandomString';
import { Hasher } from '../../../../shared/providers/HasherProvider/protocols/hasher';
import { User } from '../../../../shared/entities/user.entity';

@Injectable()
export class ResetPasswordService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private mailerService: MailerService,
    @Inject('HASH_PROVIDER')
    private hasher: Hasher,
  ) {}
  async execute(email: string) {
    const exists = await this.userRepository.findOne({ email });

    if (!exists) throw new NotFoundException('No user found!');

    const newPassword = makeRandomString(8);

    const hashedPassword = await this.hasher.createHash(newPassword);

    await this.userRepository.save({
      ...exists,
      password: hashedPassword,
    });

    const mail = {
      to: email,
      from: 'squad8.test@gmail.com',
      subject: 'Email Nova Senha',
      template: 'recover-password',
      context: {
        newPassword,
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
