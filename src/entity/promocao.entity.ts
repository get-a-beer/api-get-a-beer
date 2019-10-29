import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Promocao extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Produto, produto => produto.promocoes)
    produto: Produto;

    @Column()
    dtInicio: Date;

    @Column()
    dtTermino: Date;

    @Column()
    valor: number;
}
