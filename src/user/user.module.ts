import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserService } from './user.service';
import { OrmModule } from 'src/orm/orm.module';

@Module({
  imports: [OrmModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
