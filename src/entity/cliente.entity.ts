import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Cliente extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column({nullable: true})
    id_externo: string;

    @Column()
    dataNascimento: Date;

    @OneToOne(type => Pessoa, { cascade: true ,eager: true})
    @JoinColumn()
    pessoa: Pessoa;

}