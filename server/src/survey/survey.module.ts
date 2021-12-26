import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { User } from 'src/user/entities/user.entity';
import { Record } from 'src/record/entities/record.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { QuestionModule } from 'src/question/question.module';
import { Survey } from './entities/survey.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [User, Record, Survey],
    }),
    QuestionModule,
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
  exports: [SurveyService],
})
export class SurveyModule {}
