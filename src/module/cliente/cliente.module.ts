import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { PessoaModule } from '../pessoa/pessoa.module';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService],
  imports: [PessoaModule, UsuarioModule],
})
export class ClienteModule {}
