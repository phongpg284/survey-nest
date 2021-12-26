import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { OrmModule } from 'src/orm/orm.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Question } from 'src/question/entities/question.entity';
import { User } from './entities/user.entity';
import { Record } from 'src/record/entities/record.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [User, Record],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
