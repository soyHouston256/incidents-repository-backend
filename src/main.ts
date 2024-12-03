import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: [
      configService.get('FRONTEND_URL'),
      configService.get('FRONTEND_URL_EXTEND'),
    ],
    allowedHeaders: ['Content-Type', 'Accept'],
    methods: ['POST', 'OPTIONS'],
    credentials: true,
  });
  const port = configService.get('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
