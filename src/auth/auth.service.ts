import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    const isMatchPassword = await argon2.verify(user.password, password);
    if (user && isMatchPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const accessToken = await this.signToken(user);
    return {
      accessToken: accessToken,
    };
  }

  async signToken(user: User) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
