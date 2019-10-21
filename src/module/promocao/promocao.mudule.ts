
import { Module } from '@nestjs/common';
import { PromocaoController } from './promocao.controller';
import { PromocaoService } from './promocao.service';


@Module({
  controllers: [PromocaoController],
  providers: [PromocaoService],
  exports: [PromocaoService]
})
export class PromocaoModule {}