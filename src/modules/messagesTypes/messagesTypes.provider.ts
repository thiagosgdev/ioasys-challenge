import { Connection } from 'typeorm';

import { MessageType } from 'src/shared/entities/messageType.entity';

export const messageTypesProviders = [
  {
    provide: 'MESSAGE_TYPE_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(MessageType),
    inject: ['DATABASE_CONNECTION'],
  },
];
