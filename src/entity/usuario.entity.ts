import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario: string;

    @Column()
    senha: string;

}
