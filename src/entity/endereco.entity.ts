import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from 'typeorm';

import {Pessoa} from './pessoa.entity'

@Entity()
export class Endereco {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;

    @Column()
    cep: string;

    @Column()
    estado: string;

    @OneToOne(type => Pessoa, pessoa => pessoa.endereco)
    @JoinColumn()
    pessoa: Pessoa

}