import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { BoletoReqDTO, BoletoResDTO } from '../../dto/boleto.dto';
import { PagamentoService } from './pagamento.service';

  @Controller('pagamento')
  export class PagamentoController {
    constructor(private readonly pagService: PagamentoService) {}
    
    @Post('boleto')
    async createOne(@Res() res, @Body() boletoDto) {
      try{
        const data = await this.pagService.boletoPayment(boletoDto)
        let response: BoletoResDTO = data.data
        console.log(response)
        res.status(HttpStatus.OK).json({data: data})
      }
      catch(err){
        res.status(HttpStatus.BAD_REQUEST).send(err);
      }
    }
  }
  