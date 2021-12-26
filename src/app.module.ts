import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrmModule } from './orm/orm.module';
import { options } from './config/redis';
import { RedisModule } from '@nestjs-modules/ioredis';
@Module({
  imports: [
    OrmModule,
    AuthModule,
    RedisModule.forRoot({
      config: options,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
