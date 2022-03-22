import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';
import aws from '@aws-sdk/client-ses';
import { defaultProvider } from '@aws-sdk/credential-provider-node';

const user = 'squad8.test@gmail.com';
const pass = 'Squad8test*';

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'us-east-1',
  credentialDefaultProvider: defaultProvider,
});

export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
    },
  },
  transport: `smtp://${user}:${pass}@smtp.gmail.com`,
  //  transport: {
  //    SES: { ses, aws },
  //  },
};
