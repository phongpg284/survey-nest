import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(PORT, () => {
    console.log(`Succesfully connect to PORT: ${PORT}`);
  });
}
bootstrap();
