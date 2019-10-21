import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cervejaria } from './cervejaria.entity';
import { Promocao } from './promocao.entity';



@Entity()
export class Produto extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    valor: number;

    @Column()
    qtdDisponivel: number;    

    @ManyToOne(type => Cervejaria, cerverjaria => cerverjaria.produtos)
    cervejaria: Cervejaria;

    @OneToMany(type => Promocao, promocao => promocao.produto)
    promocoes: Promocao[];
}