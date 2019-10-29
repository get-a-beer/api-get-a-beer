import { Injectable } from '@nestjs/common';
import { Cerveja } from '../../entity/cerveja.entity';

@Injectable()
export class CervejaService {

  async createOrUpdate(cerveja: Cerveja): Promise<Cerveja> {
    try {
      return Cerveja.save(cerveja);

    } catch (err) {
      throw new Error(
        `Erro ao cadastrar cerveja \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async readOne(id: number): Promise<Cerveja> {
    return  Cerveja.findOne(
      { id },
      {relations: ['produto'],
    });
  }

  async readAll(params): Promise<Cerveja[] | any> {
    return  Cerveja.find(
      { relations: ['produto'] },
    );
  }

}
