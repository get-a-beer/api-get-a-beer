import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Pessoa } from './pessoa.entity'


@Entity()
export class Cervejaria extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @OneToOne(type => Pessoa, pessoa => pessoa.cervejaria)
    @JoinColumn()
    pessoa: Pessoa;
}