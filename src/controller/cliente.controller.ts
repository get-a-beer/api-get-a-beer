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
//   import { PessoaService } from '../service/pessoa.service';

  @Controller()
  export class ClienteController {
    constructor() {}
  
    @Get('/cliente')
    async readOne(@Res() res, @Query() query) {
      try {
        console.log("HUUUM");
          
        // let jogo = await this.pessoaService.readAll(query)
        // if (jogo != undefined) {
        //   res.status(HttpStatus.OK).send(jogo);
        // } else {
        //   res
        //     .status(HttpStatus.NOT_FOUND)
        //     .json({"message":"Nenhuma pessoa encontrada!"});
        // }
      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err.message);
      }
    }  
  }
  