import { Body, Controller, HttpStatus, Post, Res, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import { CervejaDTO } from '../../dto/cerveja.dto';
import { Cerveja } from '../../entity/cerveja.entity';
import { Cervejaria } from '../../entity/cervejaria.entity';
import { Produto } from '../../entity/produto.entity';
import { CervejaService } from './cerveja.service';
 
@Controller()
export class CervejaController {
  constructor(private readonly cervejaService: CervejaService) {}

  @Post('/cerveja')
  @ApiOperation({
    title: 'Cria cerveja',
    description: 'Cria uma nova cerveja'
  })
  @ApiResponse({
    status: 200,
    description: 'Uma nova cerveja foi criado com sucesso',
  })

  async createOne(@Res() res, @Body() cervejaDTO: CervejaDTO) {
    try {

      const cervejaria = new Cervejaria;
      cervejaria.id = cervejaDTO.cervejariaId;

      const produto = new Produto;
      produto.cervejaria = cervejaria;
      produto.valor = cervejaDTO.valor;
      produto.qtdDisponivel = cervejaDTO.qtdDisponivel;
      produto.nome = cervejaDTO.nome;
      
      const cerveja = new Cerveja;
      cerveja.produto = produto;
      cerveja.temperatura = cervejaDTO.temperatura;
      cerveja.cor = cervejaDTO.cor;
      cerveja.teorAlcolico = cervejaDTO.teorAlcolico;
      cerveja.harmonizacao = cervejaDTO.harmonizacao;

      const data = await this.cervejaService.createOrUpdate(cerveja);

      res.status(HttpStatus.OK).json({data: data});

    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }


  @Get('/cerveja/:id')
  @ApiOperation({
    title: 'Busca cerveja',
    description: 'Busca cerveja por ID'
  })
  @ApiResponse({
    status: 200,
    description: 'Cerveja ENcontrada',
  })
  async readOne(@Res() res, @Param('id') idCerveja) {
    try {
      const cerveja = await this.cervejaService.readOne(idCerveja)
      if (cerveja) {
        res.status(HttpStatus.OK).send({ data: cerveja });
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ "message": "Nenhum resultado encontrado!" });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }

  @Get('/cerveja/')
  async readAll(@Res() res, @Param('id') idCerveja, @Query() query) {
    try {
      const cervejas = await this.cervejaService.readAll(query)
      res.status(HttpStatus.OK).send(cervejas);
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err);
    }
  }
}
  
