import { Message } from 'src/shared/entities/message.entity';
import { Connection } from 'typeorm';

export const messageProviders = [
  {
    provide: 'MESSAGE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Message),
    inject: ['DATABASE_CONNECTION'],
  },
];
