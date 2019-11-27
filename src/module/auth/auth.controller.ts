
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { PessoaService } from './../pessoa/pessoa.service'
import { ClienteService } from './../cliente/cliente.service'
import { CervejariaService } from './../cervejaria/cervejaria.service'




@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly pessoaService: PessoaService, private readonly clienteService: ClienteService, private readonly cervejariaService: CervejariaService) { }


  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req) {
    if (req.user) {
      const pessoa = await this.pessoaService.readOne({ usuario: {id: req.user.id} })
      if (pessoa) {
        const cliente = await this.clienteService.readOne({ pessoa })
        if (cliente) {
          req.user.cliente = cliente
        } else {
          const cervejaria = await this.cervejariaService.readOne({pessoa})
          req.user.cervejaria = cervejaria
        }
      }
    }
    return req.user;
  }
}