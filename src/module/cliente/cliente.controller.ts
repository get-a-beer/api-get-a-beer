import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClienteDTO } from '../../dto/cliente.dto';
import { Cliente } from '../../entity/cliente.entity';
import { Pessoa } from '../../entity/pessoa.entity';
import { Usuario } from '../../entity/usuario.entity';
import { ClienteService } from './cliente.service';




  @Controller()
  export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}
  
    @Post('/cliente')
    @ApiOperation({
      title: 'Cria cliente',
      description: 'Cria um novo cliente'
    })
    @ApiResponse({
      status: 200,
      description: 'Um novo cliente foi criado com sucesso',
    })

    async createOne(@Res() res, @Body() clienteDTO: ClienteDTO) {
      try {

        const usuario = new Usuario();
        usuario.senha = clienteDTO.senha;
        usuario.usuario = clienteDTO.nomeUsuario;
        
        const pessoa = new Pessoa();
        pessoa.usuario = usuario;
        pessoa.email = clienteDTO.email;
        pessoa.nome = clienteDTO.nome;
        pessoa.telefone = clienteDTO.telefone;

        const cliente = new Cliente();
        cliente.pessoa = pessoa;
        cliente.cpf = clienteDTO.cpf;
        cliente.dataNascimento = new Date(clienteDTO.dataNascimento);

      
        const data = await this.clienteService.Create(cliente);
  
        res.status(HttpStatus.OK).json({data: data});

      } catch (err) {
        res.status(HttpStatus.BAD_GATEWAY).send(err);
      }
    }
  }
  