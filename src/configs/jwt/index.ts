import { ConfigModule, ConfigService } from '@nestjs/config';

import envConfig from '../env';

export default () => {
  return {
    imports: [ConfigModule],
    useFactory: async () => ({
      secret: envConfig().jwtSecret,
    }),
    inject: [ConfigService],
  };
};
