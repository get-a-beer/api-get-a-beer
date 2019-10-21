import { Injectable } from "@nestjs/common";
import { Promocao } from "src/entity/promocao.entity";

@Injectable()
export class PromocaoService {
    async createOrUpdate(promocao: Promocao): Promise<Promocao> {
        try {
          return Promocao.save(promocao);

        } catch (err) {
          throw new Error(
            `Erro ao cadastrar cerveja \n Erro: ${err.name}\n Mensagem: ${
              err.message
            }\n Os parametros estao certos?`,
          );
        }
      }

    async readOne(id: number): Promise<Promocao>{
        return  Promocao.findOne(
            { id: id }, 
            {relations: ["produto"] 
        });
    }

    async readAll(params): Promise<Promocao[] | any> {
        return  Promocao.find(
            { relations: ["produto"] }
        );
    }
}