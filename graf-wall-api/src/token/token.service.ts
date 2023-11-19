import {
  Injectable,
  Inject,
  Body,
  HttpException,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { responseDTO } from 'src/dto/exportResponse.dto';
import { Token } from './token.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, userName: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { userName: userName },
    });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        userName: userName,
      });
    }
  }

  async refreshToken(oldToken: string) {
    let objToken = await this.tokenRepository.findOne({
      where: { hash: oldToken },
    });
    if (objToken) {
      const user = await this.userService.findOne(objToken.userName);
      return this.authService.login(user);
    } else {
      return new HttpException(
        {
          errorMessage: 'Token invalido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
