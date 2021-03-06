import { Injectable } from '@nestjs/common';
import { Cervejaria } from '../../entity/cervejaria.entity';





@Injectable()
export class CervejariaService {

  async readOne(where: any): Promise<Cervejaria>{
    return  Cervejaria.findOne(
      where, 
      {
        join: {
          alias: 'cervejaria',
         leftJoinAndSelect: {
           pessoa: 'cervejaria.pessoa',
          },
        }});
  }

  async readAll(params): Promise<Cervejaria[] | any> {
    return  Cervejaria.find({join: {
      alias: 'cervejaria',
      leftJoinAndSelect: {
        pessoa: 'cervejaria.pessoa',
      },
    }})
  }

    
  async createOrUpdate(cervejaria: Cervejaria): Promise<Cervejaria> { 
    try {
      return Cervejaria.save(cervejaria)
    } catch (err) {
      throw new Error(
        `Erro ao cadastrar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
