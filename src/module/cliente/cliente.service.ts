import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../../entity/pessoa.entity';
import { Cliente } from '../../entity/cliente.entity';





@Injectable()
export class ClienteService {
  async Create(body: any): Promise<Pessoa | any> {
    
    try {
      const {cpf, dataNascimento, pessoa} = body
      const cliente = new Cliente()

      cliente.cpf = cpf
      cliente.dataNascimento = dataNascimento
      cliente.pessoa = pessoa

      return Cliente.save(cliente)

    } catch (err) {
      throw new Error(
        `Erro ao cadastrar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
