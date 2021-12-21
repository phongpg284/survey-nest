import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET_KEY, REFRESH_JWT_SECRET_KEY } from 'src/config/config';

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

  async refresh(user: User) {
    const refreshAccessToken = await this.signToken(user);
    return {
      refreshAccessToken: refreshAccessToken,
    };
  }

  async login(user: User) {
    const accessToken = await this.signToken(user);
    const refreshToken = await this.signRefreshToken(user);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async signToken(user: User) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: JWT_SECRET_KEY,
      expiresIn: '60s',
    });
    return accessToken;
  }

  async signRefreshToken(user: User) {
    const payload = {
      username: user.username,
      id: user.id,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: REFRESH_JWT_SECRET_KEY,
      expiresIn: '24h',
    });
    return accessToken;
  }
}
