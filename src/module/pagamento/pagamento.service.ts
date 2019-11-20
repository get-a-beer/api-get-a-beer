import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../../entity/pessoa.entity';

@Injectable()
export class PagamentoService {
  async boletoPayment(body: any): Promise<Pessoa | any> {
    
  }

}
