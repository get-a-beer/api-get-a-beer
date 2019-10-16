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

    @Get('/cervejaria/:id')
    async readOne(@Res() res, @Param() params) {
      try {
        const cervejaria = await this.cervejariaService.readOne(params.id)
        if (cervejaria) {
          res.status(HttpStatus.OK).send(cervejaria);
        }
        res
          .status(HttpStatus.NOT_FOUND)
          .json({"message":"Nenhum resultado encontrado!"});
      } catch ( err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err); 
      }
    }
    
    @Get('/cervejaria/')
    async readAll(@Res() res, @Param() params) {
      try {
        const cervejarias = await this.cervejariaService.readAll(params.id)
        res.status(HttpStatus.OK).send(cervejarias);
      } catch ( err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err); 
      }
    }
  }
  