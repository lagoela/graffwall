import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TokenService } from './token.service';
import { tokenProviders } from './token.provider';
import { forwardRef } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TokenController } from './token.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => AuthModule), DatabaseModule, UserModule],
  controllers: [TokenController],
  providers: [...tokenProviders, TokenService],
  exports: [TokenService],
})
export class TokenModule {}
