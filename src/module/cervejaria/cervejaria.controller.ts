import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CervejariaDTO } from '../../dto/cervejaria.dto';
import { Usuario } from '../../entity/usuario.entity';
import { CervejariaService } from './cervejaria.service';
import { Cervejaria } from '../../entity/cervejaria.entity';
import { Pessoa } from '../../entity/pessoa.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class CervejariaController {
  constructor(private readonly cervejariaService: CervejariaService) {}

  @Post('/cervejaria')
  @ApiOperation({
    title: 'Cria cervejaria',
    description: 'Cria uma nova cervejaria'
  })
  @ApiResponse({
    status: 200,
    description: 'Uma nova cervejaria foi criada com sucesso',
  })
  async createOne(@Res() res, @Body() cervejariaDTO: CervejariaDTO) {
    try {
      
      const usuario = new Usuario();
      usuario.senha = cervejariaDTO.senha;
      usuario.usuario = cervejariaDTO.nomeUsuario;
      
      const pessoa = new Pessoa();
      pessoa.usuario = usuario;
      pessoa.email = cervejariaDTO.email;
      pessoa.nome = cervejariaDTO.nome;
      pessoa.telefone = cervejariaDTO.telefone;

      const cervejaria = new Cervejaria();
      cervejaria.pessoa = pessoa;
      cervejaria.cnpj = cervejariaDTO.cnpj;

      const data = await this.cervejariaService.Create(cervejaria)
      
      res.status(HttpStatus.OK).json({data: data});

    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }
}
  