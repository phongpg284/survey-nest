import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmModule } from './orm/orm.module';
import { QuestionModule } from './question/question.module';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
