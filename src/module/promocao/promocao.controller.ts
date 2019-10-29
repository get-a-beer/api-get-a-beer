import { Controller, Post, Res, Body, HttpStatus, Param, Get } from '@nestjs/common';
import { PromocaoService } from './promocao.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PromocaoDTO } from '../../dto/promocao.dto';
import { Promocao } from '../../entity/promocao.entity';
import { Produto } from '../../entity/produto.entity';

@Controller()
export class PromocaoController {
    constructor(private readonly promocaoService: PromocaoService) { }

    @Post('/promocao')
    @ApiOperation({
        title: 'Cria promocao',
        description: 'Cria uma nova promocao',
    })
    @ApiResponse({
        status: 200,
        description: 'Uma nova promocao foi criado com sucesso',
    })
    async createOne(@Res() res, @Body() promocaoDTO: PromocaoDTO) {
        try {
            const produto = new Produto;
            produto.id = promocaoDTO.idProduto;

            const promocao = new Promocao;
            promocao.produto = produto;
            promocao.valor = promocaoDTO.valor;
            promocao.dtInicio = new Date(promocaoDTO.dtInicio);
            promocao.dtTermino = new Date(promocaoDTO.dtTermino);

            const data = await this.promocaoService.createOrUpdate(promocao);
            res.status(HttpStatus.OK).json({ data });

        } catch (err) {
            res.status(HttpStatus.BAD_GATEWAY).send(err);
        }
    }

    @Get('/promocao/:id')
    @ApiOperation({
        title: 'Busca promocao por ID',
        description: 'Busca promocao por ID',
    })
    @ApiResponse({
        status: 200,
        description: 'Promocao ENcontrada',
    })
    async readOne(@Res() res, @Param('id') idPromocao) {
        try {
            const promocao = await this.promocaoService.readOne(idPromocao);
            if (promocao) {
                res.status(HttpStatus.OK).send({ data: promocao });
            } else {
                res
                    .status(HttpStatus.NOT_FOUND)
                    .json({ message: 'Nenhum resultado encontrado!' });
            }
        } catch (err) {
            res.status(HttpStatus.BAD_GATEWAY).send(err);
        }
    }

    @Get('/promocao/')
    @ApiOperation({
        title: 'Todas Promocoes',
        description: 'Retorna lista com todas as promocoes',
    })
    @ApiResponse({
        status: 200,
        description: 'Promocoes Encontradas',
    })
    async readAll(@Res() res, @Param('id') idPromocao) {
        try {
            const promocoes = await this.promocaoService.readAll(idPromocao);
            res.status(HttpStatus.OK).send(promocoes);
        } catch (err) {
            res.status(HttpStatus.BAD_GATEWAY).send(err);
        }
    }

}
