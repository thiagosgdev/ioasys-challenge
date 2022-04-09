import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import configEnv from 'src/configs/env/index';
import { winstonConfig } from 'src/configs/logger/winston.config';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const logger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, { logger });
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Ioasys Challenge API')
    .setDescription('Ioasys Challenge API')
    .setVersion('1.0')
    .build();

  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configEnv().port);
}
bootstrap();
