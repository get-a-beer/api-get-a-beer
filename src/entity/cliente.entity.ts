import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from 'typeorm';
import { Pessoa } from './pessoa.entity'

@Entity()
export class Cliente {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    @OneToOne(type => Pessoa, pessoa => pessoa.cliente)
    @JoinColumn()
    pessoa: Pessoa;

}