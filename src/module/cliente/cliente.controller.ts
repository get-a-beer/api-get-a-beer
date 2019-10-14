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
import { ClienteService } from './cliente.service';
import {UsuarioService} from '../usuario/usuario.service'

type clienteDTO = {
  nome: string,
  cpf: string,
  dataNascimento: string,
  email:string,
  telefone: string
  usuario: string
  senha: string
}


  @Controller()
  export class ClienteController {
    constructor(private readonly pessoaService: PessoaService, private readonly clienteService: ClienteService,private readonly usuarioService: UsuarioService ) {}
  
    @Post('/cliente')
    async createOne(@Res() res, @Body() body: clienteDTO) {
      try {
        
        const {cpf, dataNascimento, nome, email, telefone, usuario: nomeUsuario, senha} = body        
        
        const usuario = await this.usuarioService.Create({usuario: nomeUsuario, senha})
        const pessoa = await this.pessoaService.Create({cpf, nome, email, telefone, usuario})
        const cliente = await this.clienteService.Create({cpf, dataNascimento : new Date(dataNascimento), pessoa })
        
        res.status(HttpStatus.OK).json({"status": 200, data: cliente});

      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }
  }
  