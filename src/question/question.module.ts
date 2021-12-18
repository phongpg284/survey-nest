import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { OrmModule } from 'src/orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
