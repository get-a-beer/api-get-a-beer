import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
var md5 = require('md5');


@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService, 
    private readonly jwtService: JwtService
    ) {}

  async validarUsuario(username: string, pass: string): Promise<any> {
    const usuario = await this.usuarioService.FindOne(username);
    
    if (usuario && usuario.senha === md5(pass)) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { usuario: user.usuario, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}