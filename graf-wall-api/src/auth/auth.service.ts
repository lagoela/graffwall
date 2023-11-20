import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (!user || !bcrypt.compareSync(pass, user.senha)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.email, username: user.id };
    const NEWtoken = await this.jwtService.signAsync(payload);
    this.tokenService.save(NEWtoken, user.email);
    console.log(user.nome + ' ' + NEWtoken);
    return {
      access_token: NEWtoken,
    };
  }

  async login(user: any) {
    const payload = { userName: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email);
    return {
      access_token: token,
    };
  }
}
