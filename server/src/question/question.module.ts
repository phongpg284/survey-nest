import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { OrmModule } from 'src/orm/orm.module';
import { User } from 'src/user/entities/user.entity';
import { Record } from 'src/record/entities/record.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Question, User, Record],
    }),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
