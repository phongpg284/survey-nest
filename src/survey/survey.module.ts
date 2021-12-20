import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { OrmModule } from 'src/orm/orm.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { Survey } from './entities/survey.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Question, User, Survey],
    }),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
