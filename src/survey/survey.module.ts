import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Survey } from './entities/survey.entity';
import { OrmModule } from 'src/orm/orm.module';

@Module({
  // imports: [MikroOrmModule.forFeature({ entities: [Survey] })],
  imports: [OrmModule],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
