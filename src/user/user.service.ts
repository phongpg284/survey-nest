import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositor: EntityRepository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, rePassword, username, name } = createUserDto;
    if (password !== rePassword) return 'Password unmatched!';

    const user = await this.userRepositor.findOne({ username });
    if (user) return 'User exist!';

    const newUser = new User();
    newUser.username = username;
    newUser.username = password;
    newUser.name = name;
    await this.userRepositor.persistAndFlush(newUser);
    return newUser;
  }

  async findAll() {
    const user = await this.userRepositor.find({});
    return user;
  }

  async findOne(id: number) {
    const user = await this.userRepositor.findOne({ id });
    if (!user) return 'No user found!';
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepositor.findOne({ id });
    if (!user) return 'No user found!';

    wrap(user).assign(updateUserDto);
    await this.userRepositor.persistAndFlush(user);
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
