import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logRequestInterceptor } from './common/interceptors/logRequest.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  app.useGlobalInterceptors(new logRequestInterceptor(logger));
  await app.listen(3000);
}
bootstrap();
