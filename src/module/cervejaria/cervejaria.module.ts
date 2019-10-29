import { Module } from '@nestjs/common';
import { PessoaModule } from '../pessoa/pessoa.module';
import { UsuarioModule } from '../usuario/usuario.module';
import {CervejariaController} from './cervejaria.controller';
import {CervejariaService} from './cervejaria.service';

@Module({
  controllers: [CervejariaController],
  providers: [CervejariaService],
  imports: [PessoaModule, UsuarioModule],
})
export class CervejariaModule {}
