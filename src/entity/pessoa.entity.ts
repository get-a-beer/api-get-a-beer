import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from 'typeorm';
import { Cliente } from './cliente.entity'
import { Endereco } from './endereco.entity'
import { Usuario } from './usuario.entity'


@Entity()
export class Pessoa {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idExterno: string;

    @Column()
    cpf: string;

    @Column()
    dataNascimento: Date;

    @OneToOne(type => Cliente, cliente => cliente.pessoa)
    @JoinColumn()
    cliente: Cliente;

    @OneToOne(type => Endereco, endereco => endereco.pessoa)
    @JoinColumn()
    endereco: Endereco;

    @OneToOne(type => Usuario, usuario => usuario.pessoa)
    @JoinColumn()
    usuario: Usuario;

}