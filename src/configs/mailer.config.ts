import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';
import * as aws from '@aws-sdk/client-ses';

import envConfig from '../configs/env';

const user = envConfig().emailUsername;
const pass = envConfig().emailPassword;

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: envConfig().awsRegion,
  credentials: {
    accessKeyId: envConfig().awsSESAccess,
    secretAccessKey: envConfig().awsSESSecret,
  },
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
  //  transport: `smtp://${user}:${pass}@smtp.gmail.com`,
  transport: {
    SES: { ses, aws },
  },
};
