import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from '../../entity/pessoa.entity';
import { Usuario } from '../../entity/usuario.entity';
import { bigIntLiteral } from '@babel/types';

@Injectable()
export class UsuarioService {
  async Create(body: any): Promise<Usuario> {
    try {
      const {usuario: nomeUsuario, senha} = body;
      const usuario = new Usuario();

      usuario.senha = senha;
      usuario.usuario = nomeUsuario;

      return Usuario.save(usuario);
    } catch (err) {
      throw new Error(
        `Erro ao cadastrar pessoa \n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async FindOne(usuario: string): Promise<Usuario> {
    return Usuario.findOne({where: {usuario}});
  }
}
