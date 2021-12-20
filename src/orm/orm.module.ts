import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { UserModule } from 'src/user/user.module';
import { QuestionModule } from 'src/question/question.module';
import { SurveyModule } from 'src/survey/survey.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Question, User, Survey],
    }),
    UserModule,
    SurveyModule,
    QuestionModule,
    // AuthModule,
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
