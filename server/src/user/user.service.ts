import * as argon2 from 'argon2';
import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository, logger } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, rePassword, username, firstName, lastName } = createUserDto;
    if (password !== rePassword) return 'Password unmatched!';
    let hashPassword: string;
    try {
      hashPassword = await argon2.hash(password);
    } catch (error) {
      logger.log('Error hash password!');
      return 'Error create account!';
    }

    const user = await this.userRepository.findOne({ username });
    if (user) return 'User exist!';

    const newUser = new User();
    newUser.username = username;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = hashPassword;
    await this.userRepository.persistAndFlush(newUser);
    return newUser;
  }

  async findAll() {
    try {
      const users = await this.userRepository.find({});
      return users;
    } catch (error) {
      logger.error(error);
      throw new Error(error);
    }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ id });
    if (!user) return 'No user found!';
    return user;
  }

  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOne({ username });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ id });
    if (!user) return 'No user found!';

    wrap(user).assign(updateUserDto);
    await this.userRepository.persistAndFlush(user);
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
