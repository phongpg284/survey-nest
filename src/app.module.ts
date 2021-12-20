import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrmModule } from './orm/orm.module';
import { QuestionModule } from './question/question.module';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [OrmModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
