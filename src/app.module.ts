import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './dataBase/database.module';
import { AuthModule } from './module/auth/auth.module';
import { CervejariaModule } from './module/cervejaria/cervejaria.module';
import { ClienteModule } from './module/cliente/cliente.module';
import { PessoaModule } from './module/pessoa/pessoa.module';
import { CervejaModule } from './module/cerveja/cerveja.module';
import { Promocao } from './entity/promocao.entity';
import { PromocaoModule } from './module/promocao/promocao.mudule';
import { PagamentoModule } from './module/pagamento/pagamento.module';


@Module({
  imports: [ 
    DatabaseModule, 
    PessoaModule, 
    ClienteModule, 
    CervejariaModule, 
    AuthModule,
    CervejaModule, 
    PromocaoModule,
    PagamentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [PessoaModule]
})
export class AppModule {}
