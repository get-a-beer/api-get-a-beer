
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}