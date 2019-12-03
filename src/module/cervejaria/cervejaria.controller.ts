import { Body, Controller, HttpStatus, Post, Res, Get, Param, Put} from '@nestjs/common';
import { CervejariaDTO } from '../../dto/cervejaria.dto';
import { Usuario } from '../../entity/usuario.entity';
import { CervejariaService } from './cervejaria.service';
import { Cervejaria } from '../../entity/cervejaria.entity';
import { Pessoa } from '../../entity/pessoa.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
var _ = require('lodash');
var md5 = require('md5');


@Controller()
export class CervejariaController {
  constructor(private readonly cervejariaService: CervejariaService) { }

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
      usuario.senha = md5(cervejariaDTO.senha);
      usuario.usuario = cervejariaDTO.usuario;

      const pessoa = new Pessoa();
      pessoa.usuario = usuario;
      pessoa.email = cervejariaDTO.email;
      pessoa.nome = cervejariaDTO.nome;
      pessoa.telefone = cervejariaDTO.telefone;

      const cervejaria = new Cervejaria();
      cervejaria.pessoa = pessoa;
      cervejaria.cnpj = cervejariaDTO.cnpj;

      const data = await this.cervejariaService.createOrUpdate(cervejaria)

      res.status(HttpStatus.OK).json({ data: data });

    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Get('/cervejaria/:id')
  async readOne(@Res() res, @Param() params) {
    try {
      const cervejaria = await this.cervejariaService.readOne({id: params.id})
      if (cervejaria) {
        res.status(HttpStatus.OK).send({ data: cervejaria });
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ "message": "Nenhum resultado encontrado!" });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Get('/cervejaria/')
  async readAll(@Res() res, @Param() params) {
    try {
      const cervejarias = await this.cervejariaService.readAll(params.id)
      res.status(HttpStatus.OK).send(cervejarias);
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Put('/cervejaria/:id')
  async update(@Res() res, @Body() cervejariaDTO: CervejariaDTO,@Param() params) {
    try {
      const cervejaria = await this.cervejariaService.readOne(params.id)

      if (cervejaria) {
        const {pessoa} = cervejaria
        const {usuario} = pessoa

       _.merge(usuario, _.pickBy({usuario: cervejariaDTO.usuario, senha: cervejariaDTO.senha}))

       _.merge(pessoa, _.pickBy({telefone: cervejariaDTO.telefone, email: cervejariaDTO.email}))

       _.merge(cervejaria, _.pickBy({
         cnpj: cervejariaDTO.cnpj, } 
       ))

        const clienteUpdate = await this.cervejariaService.createOrUpdate(cervejaria)
        res.status(HttpStatus.OK).send(clienteUpdate);
      } else {
        res
        .status(HttpStatus.NOT_FOUND)
        .json({"message":"Nenhum resultado encontrado!"});
      }
     
    } catch ( err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err); 
    }
  }
}

