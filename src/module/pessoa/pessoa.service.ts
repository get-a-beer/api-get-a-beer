import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../../entity/pessoa.entity';
import { Usuario} from '../../entity/usuario.entity'
import { bigIntLiteral } from '@babel/types';




@Injectable()
export class PessoaService {
  async Create(body: any): Promise<Pessoa | any> {
    try {
      const {nome, email, telefone, usuario} = body
      const pessoa = new Pessoa()
      pessoa.nome = nome
      pessoa.email = email
      pessoa.telefone = telefone
      pessoa.usuario = usuario
      
      return Pessoa.save(pessoa)
    } catch (err) {
      throw new Error(
        `Erro ao cadastrar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

}
