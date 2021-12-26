import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { OrmModule } from 'src/orm/orm.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Question } from 'src/question/entities/question.entity';
import { User } from 'src/user/entities/user.entity';
import { Record } from './entities/record.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Question, User, Record],
    }),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
