import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';

export interface UserRequest {
  id: number;
  username: string;
  tokenID?: string;
}
@Injectable()
export class AuthService {
  constructor(private userService: UserService, private tokenService: TokenService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    const isMatchPassword = await argon2.verify(user.password, password);
    if (user && isMatchPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async refresh(user: UserRequest) {
    const isRefreshTokenValid = await this.tokenService.getRefreshToken(user);
    if (!isRefreshTokenValid) return 'Expired Refresh Token!';

    // SIGN NEW ACCESS TOKEN AND REFRESH TOKEN
    const accessToken = await this.tokenService.signToken(user);
    await this.tokenService.removeRefreshToken(user);
    const refreshToken = await this.tokenService.signRefreshToken(user);

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async login(user: UserRequest) {
    const accessToken = await this.tokenService.signToken(user);
    const refreshToken = await this.tokenService.signRefreshToken(user);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async logout(user: UserRequest) {
    return await this.tokenService.removeRefreshToken(user);
  }

  async logoutAll(user: UserRequest) {
    return await this.tokenService.removeRefreshTokenAll(user);
  }
}
