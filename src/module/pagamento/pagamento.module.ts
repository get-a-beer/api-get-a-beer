
import { Module, HttpModule } from '@nestjs/common';
import { PagamentoController } from './pagamento.controller';
import { PagamentoService } from './pagamento.service';

@Module({
  imports: [HttpModule],
  controllers: [PagamentoController],
  providers: [PagamentoService]
})
export class PagamentoModule {}