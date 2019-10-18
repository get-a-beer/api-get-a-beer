import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoa } from './pessoa.entity';


@Entity()
export class Cervejaria extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cnpj: string;

    @OneToOne(type => Pessoa, { cascade: true })
    @JoinColumn()
    pessoa: Pessoa;
}