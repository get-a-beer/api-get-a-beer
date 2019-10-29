import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './endereco.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Pessoa extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @OneToOne(type => Endereco, endereco => endereco.pessoa)
    @JoinColumn()
    endereco: Endereco;

    @OneToOne(type => Usuario, { cascade: true, eager: true })
    @JoinColumn()
    usuario: Usuario;

}
