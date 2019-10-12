import {
    Get,
    Controller,
    Param,
    Post,
    Body,
    Res,
    HttpStatus,
    Delete,
    Query,
  } from '@nestjs/common';

import { PessoaService } from '../pessoa/pessoa.service';
import {UsuarioService} from '../usuario/usuario.service'
import { CervejariaService } from './cervejaria.service'

type cervejariaDTO = {
  nome: string,
  cnpj: string,
  email:string,
  telefone: string
  usuario: string
  senha: string
}


  @Controller()
  export class CervejariaController {
    constructor(private readonly cervejariaService: CervejariaService, private readonly pessoaService: PessoaService,private readonly usuarioService: UsuarioService ) {}
  
    @Post('/cervejaria')
    async createOne(@Res() res, @Body() body: cervejariaDTO) {
      try {
        
        const {cnpj, nome, email, telefone, usuario: nomeUsuario, senha} = body        
        
        const usuario = await this.usuarioService.Create({usuario: nomeUsuario, senha})
        const pessoa = await this.pessoaService.Create({nome, email, telefone, usuario})

        const cervejaria = await this.cervejariaService.Create({pessoa, cnpj})
        
        return cervejaria
        res.status(HttpStatus.OK).json({"status": 200, data: cervejaria});

      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }
  }
  