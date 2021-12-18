import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { Question } from './question/entities/question.entity';
import { Survey } from './survey/entities/survey.entity';
import { BaseEntity } from './utils/BaseEntity';

const logger = new Logger('MikroORM');

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [Question, User, Survey, BaseEntity],
      dbName: 'survey',
      type: 'mysql',
      port: 3007,
      debug: true,
      logger: logger.log.bind(logger),
      entitiesTs: ['./src/*/entities/*'],
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
