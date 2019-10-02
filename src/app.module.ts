import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClienteController } from './controller/cliente.controller'
import { DatabaseModule } from './dataBase/database.module';
import {Controllers} from  './controller'

@Module({
  imports: [DatabaseModule],
  controllers: Controllers,
  providers: [AppService],
})
export class AppModule {}
