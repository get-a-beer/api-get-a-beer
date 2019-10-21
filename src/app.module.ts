import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './dataBase/database.module';
import { AuthModule } from './module/auth/auth.module';
import { CervejariaModule } from './module/cervejaria/cervejaria.module';
import { ClienteModule } from './module/cliente/cliente.module';
import { PessoaModule } from './module/pessoa/pessoa.module';
import { CervejaModule } from './module/cerveja/cerveja.module';


@Module({
  imports: [ 
    DatabaseModule, 
    PessoaModule, 
    ClienteModule, 
    CervejariaModule, 
    AuthModule,
    CervejaModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [PessoaModule]
})
export class AppModule {}
