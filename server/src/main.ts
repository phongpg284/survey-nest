import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('/api');
  app.use(cookieParser());

  await app.listen(PORT, () => {
    console.log(`Succesfully connect to PORT: ${PORT}`);
  });
}
bootstrap();
