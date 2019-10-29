import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Cerveja extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    temperatura: number;

    @Column()
    cor: string;

    @Column()
    teorAlcolico: number;

    @Column()
    harmonizacao: string;

    @OneToOne(type => Produto, { cascade: true, eager: true})
    @JoinColumn()
    produto: Produto;

}
