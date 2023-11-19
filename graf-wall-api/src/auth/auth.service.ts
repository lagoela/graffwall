import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (!user || !bcrypt.compareSync(pass, user.senha)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.email, username: user.senha };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
