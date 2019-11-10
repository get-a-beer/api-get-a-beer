import { Injectable } from "@nestjs/common";
import { Cerveja } from "../../entity/cerveja.entity";

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
    return Cerveja.findOne(
      { id: id },
      {
        relations: ["produto"]
      });
  }

  async readAll(params): Promise<Cerveja[] | any> {
    return Cerveja.find(
      { relations: ["produto"], where: this._getWhereQuery(params) }
    );
  }
  _getWhereQuery(params): string {
    const keysPermitidas = [
      'nome',
      'categoria',
      'valorMaiorQue',
      'valorMenorQue',
      'cor'
    ];
    let where = ''
    Object.keys(params)
      .filter(key => keysPermitidas.indexOf(key) !== -1)
      .forEach((key) => {
        if (Array.isArray(params[key])) {
          where += '( ';          
          params[key].forEach(element => {            
            where +=  `${key} ILIKE '%${element}%' or `;
          });
          where = where.substr(0, where.length - 3);
          where += ') and ';

        } else {
          switch(key) {
            case 'valorMaiorQue':
              where += `Cerveja_produto.valor >= ${params[key]} and `
              break
            case 'valorMenorQue':
              where += `Cerveja_produto.valor <= ${params[key]} and `
              break
            case 'nome':
              where += `Cerveja_produto.nome ILIKE '%${params[key]}%' and `
              break
            default:
              where +=  `${key} ILIKE '%${params[key]}%' and `
              break
          }
        }
      });
    return where.substr(0, where.length - 4);
  }

}
