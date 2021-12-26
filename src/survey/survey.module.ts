import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { User } from 'src/user/entities/user.entity';
import { Record } from 'src/record/entities/record.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [User, Record],
    }),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
