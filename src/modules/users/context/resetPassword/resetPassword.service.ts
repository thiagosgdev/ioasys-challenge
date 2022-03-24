import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';

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
    await this.mailerService.sendMail(mail);
  }
}
