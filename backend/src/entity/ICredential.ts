import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ICredentialEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()   
    username: string;

    @Column()
    password: string;
}