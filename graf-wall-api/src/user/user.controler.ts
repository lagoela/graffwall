import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { userRegistrationDTO } from './dto/user.create.dto';
import { responseDTO } from 'src/dto/exportResponse.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findAll')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('register')
  async cadastrar(@Body() data: userRegistrationDTO): Promise<responseDTO> {
    return this.userService.register(data);
  }
}
