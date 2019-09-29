import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Pessoa {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

}