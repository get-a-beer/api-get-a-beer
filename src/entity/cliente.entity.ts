import { Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn, BaseEntity} from 'typeorm';
import { Pessoa } from './pessoa.entity'

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

    @OneToOne(type => Pessoa, pessoa => pessoa.cliente)
    @JoinColumn()
    pessoa: Pessoa;

}