import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import { Cliente } from './cliente.entity'
import { Endereco } from './endereco.entity'
import { Usuario } from './usuario.entity'
import { Cervejaria } from './cervejaria.entity'



@Entity()
export class Pessoa extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String


    @Column()
    telefone: String

    @Column()
    email: String

    @OneToOne(type => Cervejaria, cervejaria => cervejaria.pessoa)
    @JoinColumn()
    cervejaria: Cervejaria;

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