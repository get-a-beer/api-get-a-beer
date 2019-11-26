import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { BoletoReqDTO, BoletoResDTO } from '../../dto/boleto.dto';
import { PagamentoService } from './pagamento.service';

  @Controller('pagamento')
  export class PagamentoController {
    constructor(private readonly pagService: PagamentoService) {}
    
    @Post('boleto')
    async createOne(@Res() res, @Body() boletoDto: BoletoReqDTO) {
      try{
        const data = await this.pagService.boletoPayment(boletoDto)
        let response: BoletoResDTO = data.data
        res.status(HttpStatus.OK).json({data: response})
      }
      catch(err){
        res.status(HttpStatus.BAD_REQUEST).send(err);
      }
    }
  }
  