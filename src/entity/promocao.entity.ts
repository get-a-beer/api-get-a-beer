import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Promocao extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Produto, produto => produto.promocoes)
    produto: Produto;
}