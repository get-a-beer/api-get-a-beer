import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Produto } from './produto.entity';


enum Categoria {
    leves = 'leves',
    maltadas = 'maltadas',
    lupuladas = 'lupuladas',
    torradas = 'torradas',
    alcoolicas = 'alcoolicas',
    complexas = 'complexas',
    frutadas = 'frutadas',
    outras = 'outras'
}

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

    @Column('text',{default: 'alcoolicas' })
    categoria: Categoria

    @OneToOne(type => Produto, { cascade: true, eager: true})
    @JoinColumn()
    produto: Produto;

}