import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { BoletoReqDTO } from '../../dto/boleto.dto';
import { PagamentoService } from './pagamento.service';

  @Controller()
  export class PagamentoController {
    constructor(private readonly pagService: PagamentoService) {}
    
    @Post('/boleto')
    async createOne(@Res() res, @Body() boletoDto: BoletoReqDTO) {
      try{
        const data = this.pagService.boletoPayment(boletoDto)
        res.status(HttpStatus.OK).json({data: data})
      }
      catch(err){
        res.status(HttpStatus.BAD_REQUEST).send(err);
      }
    }
  }
  