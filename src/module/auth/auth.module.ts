
import { Module, Controller } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import {AuthService} from './auth.service'
import { PassportModule } from '@nestjs/passport';
import {LocalStrategy } from './local.strategy'
import { AuthController} from './auth.controller'
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';




@Module({
  imports:[
      UsuarioModule, 
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
    ],
  controllers: [AuthController],
  providers: [
      AuthService, 
      LocalStrategy,
      JwtStrategy
    ],
})
export class AuthModule {}