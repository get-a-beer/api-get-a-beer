import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import { Pessoa } from './pessoa.entity'


@Entity()
export class Usuario extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    senha: string;

    @OneToOne(type => Pessoa, pessoa => pessoa.usuario)
    @JoinColumn()
    pessoa: Pessoa;
}