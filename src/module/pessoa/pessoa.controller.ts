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

  
  @Controller()
  export class PessoaController {
    constructor() {}
  

    @Post('/pessoa')
    async createOne(@Res() res, @Body() body: any) {
      try {
      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }
  }
  