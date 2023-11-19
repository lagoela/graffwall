import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

import { userRegistrationDTO } from './dto/user.create.dto';
import { responseDTO } from 'src/dto/exportResponse.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async register(@Body() data: userRegistrationDTO): Promise<responseDTO> {
    const user = new User();

    user.email = data.email;
    user.nome = data.firstName;
    user.sobrenome = data.lastName;
    user.senha = bcrypt.hashSync(data.password, 8);

    console.log(user);

    try {
      const savedUser = await this.userRepository.save(user);

      return <responseDTO>{
        status: true,
        message: 'Usuário Cadastrado',
        user: savedUser,
      };
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário: ' + error.message);
    }
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email: email } });
  }
}
