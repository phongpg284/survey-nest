import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { OrmModule } from 'src/orm/orm.module';
import { User } from 'src/user/entities/user.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Question, User, Survey],
    }),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
