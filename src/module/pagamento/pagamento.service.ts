import { Injectable, HttpService } from '@nestjs/common';
import { BoletoReqDTO, BoletoResDTO } from '../../dto/boleto.dto';
import { PagSeguroConfig } from '../../config/pagseguro.config';
import * as axios from 'axios'

@Injectable()
export class PagamentoService {
  private pagConfig: PagSeguroConfig = new PagSeguroConfig();

  constructor(private readonly http: HttpService){}

  async boletoPayment(body: BoletoReqDTO): Promise<BoletoResDTO | any> {
    return await axios.default.post(this.pagConfig.url, body)
  }

}
