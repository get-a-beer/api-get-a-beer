import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Produto } from './produto.entity';


@Entity()
export class Cervejaria extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @OneToOne(type => Pessoa, { cascade: true, eager: true})
    @JoinColumn()
    pessoa: Pessoa;

    @OneToMany(type => Produto, produto => produto.cervejaria)
    produtos: Produto[];
}