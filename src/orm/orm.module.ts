import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { Survey } from 'src/survey/entities/survey.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [Question, User, Survey],
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
