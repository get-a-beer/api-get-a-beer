import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../../entity/pessoa.entity';
import { Cervejaria } from '../../entity/cervejaria.entity';





@Injectable()
export class CervejariaService {

  async readOne(id: number): Promise<Cervejaria>{
    return await Cervejaria.findOne(
      { id: id }, 
      {
        join: {
          alias: 'cervejaria',
         leftJoinAndSelect: {
           pessoa: 'cervejaria.pessoa',
          },
        }});
  }

  async readAll(params): Promise<Cervejaria[] | any> {
    return await Cervejaria.find({join: {
      alias: 'cervejaria',
      leftJoinAndSelect: {
        pessoa: 'cervejaria.pessoa',
      },
    }})
  }

  async Create(body: any): Promise<Pessoa | any> {
    
    try {
      const {cnpj, pessoa} = body
      const cervejaria = new Cervejaria()

      cervejaria.cnpj = cnpj
      cervejaria.pessoa = pessoa

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
