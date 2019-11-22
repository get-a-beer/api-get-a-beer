import { Injectable, HttpService } from '@nestjs/common';
import { BoletoResDTO, BoletoReqDTO } from '../../dto/boleto.dto';
import { PagSeguroConfig } from '../../config/pagseguro.config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class PagamentoService {
  private pagConfig: PagSeguroConfig = new PagSeguroConfig();

  constructor(private readonly http: HttpService){}

  boletoPayment(body: BoletoReqDTO): Observable<AxiosResponse<BoletoResDTO | any>> {
    return this.http.post(this.pagConfig.url, body)
  }

}
