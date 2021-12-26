import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { QuestionModule } from 'src/question/question.module';
import { RecordModule } from 'src/record/record.module';
import { SurveyModule } from 'src/survey/survey.module';
import { Survey } from 'src/survey/entities/survey.entity';
import { Record } from 'src/record/entities/record.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Question, User, Record, Survey],
    }),
    UserModule,
    RecordModule,
    QuestionModule,
    SurveyModule,
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
