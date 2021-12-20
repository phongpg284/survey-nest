import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from 'src/user/entities/user.entity';
import { OrmModule } from 'src/orm/orm.module';
import { UserModule } from 'src/user/user.module';
import { SurveyModule } from 'src/survey/survey.module';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
