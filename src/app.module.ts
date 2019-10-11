import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './dataBase/database.module';
import { PessoaModule} from './module/pessoa/pessoa.module'
import { ClienteModule} from './module/cliente/cliente.module'
import { CervejariaModule} from './module/cervejaria/cervejaria.module'


@Module({
  imports: [DatabaseModule, PessoaModule, ClienteModule, CervejariaModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [PessoaModule]
})
export class AppModule {}
