import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin:
      configService.get('FRONTEND_URL') ||
      configService.get('FRONTEND_URL_EXTEND') ||
      'http://localhost:3000',
    credentials: true,
  });
  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();

//Date limit
