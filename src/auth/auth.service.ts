import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from 'src/config/config';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user && argon2.verify(user.password, password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    return {
      accessToken: this.signToken(user),
    };
  }

  async signToken(user: User) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    const accessToken = jwt.sign(payload, JWT_SECRET_KEY);
    return accessToken;
  }
}
