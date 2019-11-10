import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum roles {
    cliente = "cliente",
    cervejaria = "cervejaria"
}

@Entity()
export class Usuario extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    senha: string;

    @Column('text',{default: null})
    role: roles

}